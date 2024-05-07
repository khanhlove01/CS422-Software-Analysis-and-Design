const fs = require("fs")
const NFT = require('../models/nftModel');
const APIFeatures = require('../Utils/apiFeatures');
const { log } = require("console");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/appError");
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

const getAllNfts = catchAsync(async (req,res,next) => {
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
    // try {
    //     const features = new APIFeatures(NFT.find(), req.query)
    //         .filter().sort().limitFields().pagination();
    //     const nfts = await features.query;

    //     //SEND RESPONSE
    //     res.status(200).json({
    //         status: 'success',
    //         results: nfts.length,
    //         data: {
    //             nfts
    //         }
    //     })
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({
    //         status: 'fail',
    //         message: 'Server Error!'
    //     })
    // }
})

// const catchAsync = myFn => {
//     return (req,res,next) => {
//         // myFn(req,res,next).catch((err) => next(err));
//         myFn(req,res,next).catch(next);
//     }
// }
// POST request
const createNFT = catchAsync( async (req,res,next) => {
    const newNFT = await NFT.create(req.body);
    
    res.status(201).json({
        status: 'success',
        data: {
            nft: newNFT
        }
    });
    // try {
    //     const newNFT = await NFT.create(req.body);
    
    //     res.status(201).json({
    //         status: 'success',
    //         data: {
    //             nft: newNFT
    //         }
    //     });
    // } catch (error) {
    //     res.status(400).json({
    //         status: 'fail',
    //         message: error
    //     });
    // }
})

//Get single NFT
const getSingleNFT = catchAsync(async (req,res,next) => {
    const nft = await NFT.findById(req.params.id)

    if(!nft){
        return next(new AppError('NFT not found with that id!', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
              nft
        }
    });
    // try {
    //     const nft = await NFT.findById(req.params.id)

    //     res.status(200).json({
    //         status: 'success',
    //         data: {
    //             nft
    //         }
    //     });
    // } catch (error) {
    //     res.status(404).json({
    //         status: 'fail',
    //         message: 'NFT not found!'
    //     });
    // }
})

//Patch method
const updateNFT = catchAsync(async (req,res,next) => {
    const nft = await NFT.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true
    })
    if(!nft){
        return next(new AppError('NFT not found with that id!', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            nft
        }
    })
    // try {
    //     const nft = await NFT.findByIdAndUpdate(req.params.id, req.body,{
    //         new: true,
    //         runValidators: true
    //     })

    //     res.status(200).json({
    //         status: 'success',
    //         data: {
    //             nft
    //         }
    //     })
    // } catch (error) {
    //     res.status(404).json({
    //         status: 'fail',
    //         message: 'NFT not found!'
    //     })
    // }
})

//Delete method
const deleteNFT = catchAsync(async (req,res,next) => {
    const nft = await NFT.findByIdAndDelete(req.params.id);
    if(!nft){
        return next(new AppError('NFT not found with that id!', 404));
    }
    res.status(204).json({
        status: 'success',
        data: null
    })   
    // try {
    //     await NFT.findByIdAndDelete(req.params.id);
    //     res.status(204).json({
    //         status: 'success',
    //         data: null
    //     })
    // } catch (error) {
    //     res.status(404).json({
    //         status: 'fail',
    //         message: 'NFT not found!'
    //     })
    // }
})

//Aggregation Pipeline
const getNFTsStats = catchAsync( async (req,res,next) => {
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
    // try {
    //     const stats = await NFT.aggregate([
    //         {
    //             $match: { ratingsAverage: { $gte: 4.5 } }
    //         },
    //         {
    //             $group: {
    //                 _id: { $toUpper: '$difficulty' },
    //                 numNfts: { $sum: 1 },
    //                 numRatings: { $sum: '$ratingsQuantity' },
    //                 avgRating: { $avg: '$ratingsAverage' },
    //                 avgPrice: { $avg: '$price' },
    //                 minPrice: { $min: '$price' },
    //                 maxPrice: { $max: '$price' }
    //             }
    //         },
    //         {
    //              $sort: { avgPrice: 1 }
    //         },
    //         // {
    //         //     $match: { _id: { $ne: 'EASY' } }
    //         // }
    //     ]);

    //     res.status(200).json({
    //         status: 'success',
    //         data: {
    //             stats
    //         }
    //     })
    // } catch (error) {
    //     console.log(error);
    //     res.status(404).json({
    //         status: 'fail',
    //         message: error
    //     })
    // }
})

//CALCULATING NUMBER OF NFT CREATED IN THE MONTH OR MONTHLY PLAN
const getMonthlyPlan = catchAsync(async (req,res,next) => {
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
    // try {
    //     const year = req.params.year * 1;
    //     const plan = await NFT.aggregate([
    //         {
    //             $unwind: '$startDates'
    //         },
    //         {
    //             $match: {
    //                 startDates: {
    //                     $gte: new Date(`${year}-01-01`),
    //                     $lte: new Date(`${year}-12-31`)
    //                 }
    //             }
    //         },
    //         {
    //             $group: {
    //                 _id: { $month: '$startDates' },
    //                 numNftsStarts: { $sum: 1 },
    //                 nfts: { $push: '$name' }
    //             }
    //         },
    //         {
    //             $addFields: { month: '$_id' }
    //         },
    //         {
    //             $project: {
    //                 _id: 0
    //             }
    //         },
    //         {
    //             $sort: { numNftsStarts: 1 }
    //         },
    //         {
    //             $limit: 6
    //         }
    //     ]);

    //     res.status(200).json({
    //         status: 'success',
    //         data: {
    //             plan
    //         }
    //     })
    // } catch (error) {
    //     console.log(error);
    //     res.status(404).json({
    //         status: 'fail',
    //         message: error
    //     })
    // }
})

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