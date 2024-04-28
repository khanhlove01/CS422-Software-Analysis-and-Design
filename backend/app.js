const express = require("express")
const fs = require("fs")

const app = express()
app.use(express.json())
// app.get('/',(req,res) => {
//     res.status(200).json({message: 'Hello World!'})
// })

// app.post('/',(req,res) => {
//     res.status(201).json({message: 'Data created!'})
// })

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

const port = 3000
app.listen(port, () => {
    console.log('====================================');
    console.log(`Server is running on port ${port}`);
    console.log('====================================');
})