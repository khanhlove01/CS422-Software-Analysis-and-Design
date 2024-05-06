const fs = require("fs")
const NFT = require('../models/nftModel');
const APIFeatures = require('../Utils/apiFeatures');
const { log } = require("console");
//GET request
// const nfts = JSON.parse(
//     fs.readFileSync(`${__dirname}/../data/nft-simple.json`)
// );
const aliasTopNfts = (req,res,next) => {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = "name,price,ratingsAverage,difficulty"
    next();
}

const getAllNfts = async (req,res) => {
    try {
        // //BUILD QUERY
        // const queryObj = {...req.query};
        // const excludedFields = ['page', 'sort', 'limit', 'fields'];
        // excludedFields.forEach(el => delete queryObj[el])
        // // console.log(req.query, queryObj);

        // //EXECUTE QUERY
        // //ADVANCED FILTERING
        // let queryStr = JSON.stringify(queryObj);
        // queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        // // console.log(JSON.parse(queryStr));
        // // { difficulty: 'medium', duration: { '$gte': '5' } }
        // let query = NFT.find(JSON.parse(queryStr));

        // //SORTING

        // if(req.query.sort){
        //     // console.log(req.query.sort);
        //     const sortBy = req.query.sort.split(',').join(' ');
        //     query = query.sort(sortBy);
        // }

        // //FIELD LIMITING
        // if(req.query.fields){
        //     const fields = req.query.fields.split(',').join(' ');
        //     query = query.select(fields);
        // }
        // else{
        //     query = query.select('-__v');
        // }

        // //PAGINATION
        // //page=2&limit=3, page = 1, 1- 10, page = 2, 11-20, page = 3, 21-30
        // const page = req.query.page * 1 || 1;
        // const limit = req.query.limit * 1 || 10;
        // const skip = (page - 1) * limit;

        // query = query.skip(skip).limit(limit);

        // if(req.query.page){
        //     const numNfts = await NFT.countDocuments();
        //     if(skip >= numNfts) throw new Error('This page does not exist');
        // }
        const features = new APIFeatures(NFT.find(), req.query)
            .filter().sort().limitFields().pagination();
        const nfts = await features.query;

        //SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: nfts.length,
            data: {
                nfts
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: 'Server Error!'
        })
    }
}

// POST request
const createNFT = async (req,res) => {
    try {
        const newNFT = await NFT.create(req.body);
    
        res.status(201).json({
            status: 'success',
            data: {
                nft: newNFT
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}

//Get single NFT
const getSingleNFT = async (req,res) => {
    
    try {
        const nft = await NFT.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                nft
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: 'NFT not found!'
        });
    }
}

//Patch method
const updateNFT = async (req,res) => {
    try {
        const nft = await NFT.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        })

        res.status(200).json({
            status: 'success',
            data: {
                nft
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: 'NFT not found!'
        })
    }
}

//Delete method
const deleteNFT = async (req,res) => {

    try {
        await NFT.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: 'NFT not found!'
        })
    }
}

//Aggregation Pipeline
const getNFTsStats = async (req,res) => {
    try {
        const stats = await NFT.aggregate([
            {
                $match: { ratingsAverage: { $gte: 4.5 } }
            },
            {
                $group: {
                    _id: { $toUpper: '$difficulty' },
                    numNfts: { $sum: 1 },
                    numRatings: { $sum: '$ratingsQuantity' },
                    avgRating: { $avg: '$ratingsAverage' },
                    avgPrice: { $avg: '$price' },
                    minPrice: { $min: '$price' },
                    maxPrice: { $max: '$price' }
                }
            },
            {
                 $sort: { avgPrice: 1 }
            },
            // {
            //     $match: { _id: { $ne: 'EASY' } }
            // }
        ]);

        res.status(200).json({
            status: 'success',
            data: {
                stats
            }
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

//CALCULATING NUMBER OF NFT CREATED IN THE MONTH OR MONTHLY PLAN
const getMonthlyPlan = async (req,res) => {
    try {
        const year = req.params.year * 1;
        const plan = await NFT.aggregate([
            {
                $unwind: '$startDates'
            },
            {
                $match: {
                    startDates: {
                        $gte: new Date(`${year}-01-01`),
                        $lte: new Date(`${year}-12-31`)
                    }
                }
            },
            {
                $group: {
                    _id: { $month: '$startDates' },
                    numNftsStarts: { $sum: 1 },
                    nfts: { $push: '$name' }
                }
            },
            {
                $addFields: { month: '$_id' }
            },
            {
                $project: {
                    _id: 0
                }
            },
            {
                $sort: { numNftsStarts: 1 }
            },
            {
                $limit: 6
            }
        ]);

        res.status(200).json({
            status: 'success',
            data: {
                plan
            }
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

module.exports = {
    getAllNfts, 
    createNFT, 
    getSingleNFT, 
    updateNFT, 
    deleteNFT,
    aliasTopNfts,
    getNFTsStats,
    getMonthlyPlan,
}