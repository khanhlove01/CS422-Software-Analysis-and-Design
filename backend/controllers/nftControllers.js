const fs = require("fs")
const NFT = require('../models/nftModel');
//GET request
// const nfts = JSON.parse(
//     fs.readFileSync(`${__dirname}/../data/nft-simple.json`)
// );

const getAllNfts = async (req,res) => {
    try {
        //BUILD QUERY
        const queryObj = {...req.query};
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el])
        // console.log(req.query, queryObj);

        //EXECUTE QUERY
        //ADVANCED FILTERING
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        // console.log(JSON.parse(queryStr));
        // { difficulty: 'medium', duration: { '$gte': '5' } }
        let query = NFT.find(JSON.parse(queryStr));

        //SORTING

        if(req.query.sort){
            // console.log(req.query.sort);
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        }
        
        const nfts = await query;

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
            message: "Invalid data sent!"
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

module.exports = {
    getAllNfts, 
    createNFT, 
    getSingleNFT, 
    updateNFT, 
    deleteNFT,
}