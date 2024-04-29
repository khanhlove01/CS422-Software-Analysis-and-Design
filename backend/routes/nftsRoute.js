const express = require('express');
const nftsRouter = express.Router();
const nftControllers = require('../controllers/nftControllers');

nftsRouter.param('id', nftControllers.checkId);

//Router NFTs
nftsRouter.route('/')
    .get(nftControllers.getAllNfts)
    .post(nftControllers.checkBody,nftControllers.createNFT);

nftsRouter.route('/:id')
    .get(nftControllers.getSingleNFT)
    .patch(nftControllers.updateNFT)
    .delete(nftControllers.deleteNFT);

module.exports = nftsRouter;