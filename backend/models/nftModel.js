const mongoose = require('mongoose')
const slugify = require('slugify')
const validator = require('validator')

const nftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A nft must have a name'],
        trim: true,
        unique: true,
        maxlength: [40, 'A nft name must have less or equal then 40 characters'],
        minlength: [10, 'A nft name must have more or equal then 10 characters'],
        //validate: [validator.isAlpha, 'Tour name must only contain characters']   
    },
    slug: String,
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
        required: [true, 'A nft must have a difficulty'],
        enum: {
            values: ['easy', 'medium', 'difficult'],
            message: 'Difficulty is either: easy, medium, difficult'
        }
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
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
        type: Number,
        validate: {
            validator: function(val){
                //this only points to current doc on NEW document creation
                return val < this.price;
            },
            message: 'Discount price ({VALUE}) should be below regular price'
        }
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
    secretNFT:{
        type: Boolean,
        default: false
    },
    elemental:{
        type: String,
        required: [true, 'A nft must have a elemental type'],
        enum: {
            values: ['Forest', 'Sea', 'Sky','Player'],
            message: 'elemental is either: Forest, Sea, Sky or Player'
        }
    }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

nftSchema.virtual('durationWeeks').get(function(){
    return this.duration / 7
})

//Document Middleware: runs before .save() and .create()
//Moongoose middleware
nftSchema.pre('save',function(next){
    this.slug = slugify(this.name, { lower: true });
    next();
})

// nftSchema.pre('save',function(next){
//     console.log('Will save document...');
//     next();
// })

// nftSchema.post("save", function(doc, next){
//     console.log(doc);
//     next();
// })

//Query Middleware
nftSchema.pre(/^find/, function(next){
    this.find({ secretNFT: { $ne: true } });
    this.start = Date.now();
    next();
})

// nftSchema.pre("findOne", function(next){
//     this.find({ secretNFT: { $ne: true } });
//     next();
// })
// ------post
nftSchema.post(/^find/, function(docs, next){
    console.log(`Query took ${Date.now() - this.start} times`);
    //console.log(docs);
    next()
})
//Aggregation Middleware
nftSchema.pre('aggregate', function(next){
    this.pipeline().unshift({ $match: { secretNFT: { $ne: true } } });
    //console.log(this.pipeline());
    next()
})
const NFT = mongoose.model('NFT', nftSchema);

module.exports = NFT;