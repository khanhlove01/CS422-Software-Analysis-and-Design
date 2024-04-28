const { log } = require("console");
const express = require("express")
const fs = require("fs")
const app = express()

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

console.log('====================================');
console.log(nfts);
console.log('====================================');

app.get('/api/v1/nfts', (req,res) => {
    res.status(200).json({
        status: 'success',
        results: nfts.length,
        data: {
            nfts,
        }
    })
})

const port = 3000
app.listen(port, () => {
    console.log('====================================');
    console.log(`Server is running on port ${port}`);
    console.log('====================================');
})