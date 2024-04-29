const express = require('express');
const fs = require("fs")

const nftsRouter = express.Router();

//GET request
const nfts = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/nft-simple.json`)
);

const getAllNfts = (req,res) => {
    console.log(req.requestTime);
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: nfts.length,
        data: {
            nfts,
        }
    })
}


// POST request
const createNFT = (req,res) => {
    const newId = nfts[nfts.length - 1].id + 1;
    const newNFTs = Object.assign({id: newId}, req.body);
    nfts.push(newNFTs);
    console.log('====================================');
    console.log(newNFTs);
    console.log('====================================');
    fs.writeFile(`${__dirname}/data/nft-simple.json`, JSON.stringify(nfts), err => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: 'error', message: 'An error occurred while writing to the file.' });
        }
        console.log("Success");
        res.status(201).json({
            status: 'success',
            data: {
                nft: newNFTs,
            }
        })
    })
}


//Get single NFT
const getSingleNFT =  (req,res) => {
    console.log(req.params);

    if (req.params.id * 1 >= nfts.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    const nft = nfts.find(el => el.id === parseInt(req.params.id));
    res.status(200).json({
        status: 'success',
        data: {
            nft,
        }
    });
}

//Patch method
const updateNFT =  (req,res) => {

    if(req.params.id * 1 > nfts.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

    res.status(200).json({
        status: 'success',
        data: {
            nft: '<Updated nft here...>'
        }
    
    })
}

//Delete method
const deleteNFT =  (req,res) => {
    if(req.params.id * 1 > nfts.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

    res.status(204).json({
        status: 'success',
        data: null
    })
}

//Router NFTs
nftsRouter.route('/').get(getAllNfts).post(createNFT);

nftsRouter.route('/:id').get(getSingleNFT).patch(updateNFT).delete(deleteNFT);

module.exports = nftsRouter;