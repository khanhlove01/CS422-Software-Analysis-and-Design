const mongoose = require('mongoose')

const nftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A nft must have a name'],
        trim: true,
        unique: true
    },
    duration:{
        type: String,
        required: [true, 'A nft must have a duration'] 
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A nft must have a group size']
    },
    difficulty:{
        type: String,
        required: [true, 'A nft must have a difficulty']
    },
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price:{
        type: Number,
        required: [true, 'A nft must have a price']
    },
    priceDiscount:{
        type: Number
    },
    summary:{
        type:String,
        trim: true,
        required: [true, 'A nft must have a summary']
    },
    description:{
        type:String,
        trim: true
    },
    imageCover:{
        type: String,
        required: [true, 'A nft must have a cover image']
    },
    images: [String],
    createdAt:{
        type: Date,
        default: Date.now(),
        select: false
    },
    startDates: [Date],
})

const NFT = mongoose.model('NFT', nftSchema);

module.exports = NFT;