const express = require('express');
const nftsRouter = express.Router();
const nftControllers = require('../controllers/nftControllers');
const authController = require('../controllers/authController');

//nftsRouter.param('id', nftControllers.checkId);

//TOP 5 NFTs BY PRICE
nftsRouter
    .route('/top-5-nfts')
    .get(nftControllers.aliasTopNfts, nftControllers.getAllNfts);
//STAT ROUTE
nftsRouter
    .route('/nft-stats')
    .get(nftControllers.getNFTsStats);

//Get montnly plan
nftsRouter
    .route('/monthly-plan/:year')
    .get(nftControllers.getMonthlyPlan);

//Router NFTs
nftsRouter.route('/')
    .get(authController.protect, nftControllers.getAllNfts)
    // .get(nftControllers.getAllNfts)
    .post(nftControllers.createNFT);

nftsRouter.route('/:id')
    .get(nftControllers.getSingleNFT)
    .patch(nftControllers.updateNFT)
    .delete(
        authController.protect,
        authController.restrictTo("admin","guide") ,
        nftControllers.deleteNFT);

module.exports = nftsRouter;