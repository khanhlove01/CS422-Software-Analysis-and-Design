const express = require("express")
const morgan = require("morgan")
const AppError = require("./Utils/appError")
const globalErrorHandler = require("./controllers/errorController")
const nftsRouter = require("./routes/nftsRoute")
const usersRouter = require("./routes/usersRoute")
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")

const app = express()
app.use(express.json({limit: '10kb'}))
//SECURITY HTTP HEADERS
// app.use(helmet())
//LIMIT REQUEST FROM THE SAME IP
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour'
})

app.use('/api', limiter)

if(process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//Serving template demo
app.use(express.static(__dirname + "/img"));
//console.log(__dirname);

//Custom middleware
app.use((req,res,next) => {
    console.log('Hello from the middleware');
    next();
})

app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    //console.log(req.headers);
    next();
})

app.use('/api/v1/nfts', nftsRouter);
app.use('/api/v1/users', usersRouter);

//ERROR SECTION
// RUN FROM TOP TO BOTTOM
app.all('*', (req,res,next) => {
    // res.status(404).json({
    //     status: 'fail',
    //     message: `Can't find ${req.originalUrl} on this server`
    // })

    // const err = new Error(`Can't find ${req.originalUrl} on this server`);
    // err.statusCode = 404;
    // err.status = 'fail';
    // next(err)

    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

// GLOBAL HANDLING ERROR
app.use(globalErrorHandler)

module.exports = app;