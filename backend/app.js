const express = require("express")
const fs = require("fs")

const app = express()
app.use(express.json())

//GET request
const nfts = JSON.parse(
    fs.readFileSync(`${__dirname}/data/nft-simple.json`)
);

app.get('/api/v1/nfts', (req,res) => {
    res.status(200).json({
        status: 'success',
        results: nfts.length,
        data: {
            nfts,
        }
    })
})

// POST request
app.post("/api/v1/nfts",(req,res) => {
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
    // res.send("POST NFT");
})

//Get single NFT
app.get("/api/v1/nfts/:id", (req,res) => {
    console.log(req.params);

    if(id => nfts.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

    const nft = nfts.find(el => el.id === parseInt(req.params.id));
    res.status(200).json({
        status: 'success',
        data: {
            nft,
        }
    })
})

//Patch method
app.patch("/api/v1/nfts/:id", (req,res) => {

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
})

//Delete method
app.delete("/api/v1/nfts/:id", (req,res) => {
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
})

const port = 3000
app.listen(port, () => {
    console.log('====================================');
    console.log(`Server is running on port ${port}`);
    console.log('====================================');
})