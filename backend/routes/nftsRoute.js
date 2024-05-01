const express = require('express');
const nftsRouter = express.Router();
const nftControllers = require('../controllers/nftControllers');

//nftsRouter.param('id', nftControllers.checkId);

//TOP 5 NFTs BY PRICE
nftsRouter
    .route('/top-5-nfts')
    .get(nftControllers.aliasTopNfts, nftControllers.getAllNfts);   
//Router NFTs
nftsRouter.route('/')
    .get(nftControllers.getAllNfts)
    .post(nftControllers.createNFT);

nftsRouter.route('/:id')
    .get(nftControllers.getSingleNFT)
    .patch(nftControllers.updateNFT)
    .delete(nftControllers.deleteNFT);

module.exports = nftsRouter;