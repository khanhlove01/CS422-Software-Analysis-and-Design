const express = require("express")
const fs = require("fs")
const morgan = require("morgan")

const app = express()
app.use(express.json())
app.use(morgan('dev'))
//Custom middleware
app.use((req,res,next) => {
    console.log('Hello from the middleware');
    next();
})

app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    next();
})

//GET request
const nfts = JSON.parse(
    fs.readFileSync(`${__dirname}/data/nft-simple.json`)
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

// app.get('/api/v1/nfts', getAllNfts);
// app.post("/api/v1/nfts", createNFT);
// app.get("/api/v1/nfts/:id", getSingleNFT);
// app.patch("/api/v1/nfts/:id",updateNFT)
// app.delete("/api/v1/nfts/:id",deleteNFT)

app.route('/api/v1/nfts').get(getAllNfts).post(createNFT);

app.route('/api/v1/nfts/:id').get(getSingleNFT).patch(updateNFT).delete(deleteNFT);

const port = 3000
app.listen(port, () => {
    console.log('====================================');
    console.log(`Server is running on port ${port}`);
    console.log('====================================');
})