const express = require('express');
const nftsRouter = express.Router();
const nftControllers = require('../controllers/nftControllers');


//Router NFTs
nftsRouter.route('/')
    .get(nftControllers.getAllNfts)
    .post(nftControllers.createNFT);

nftsRouter.route('/:id')
    .get(nftControllers.getSingleNFT)
    .patch(nftControllers.updateNFT)
    .delete(nftControllers.deleteNFT);

module.exports = nftsRouter;