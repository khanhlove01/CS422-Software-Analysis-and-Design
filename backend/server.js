const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({path: './config.env'})


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then((con) => {
    //console.log(con.connection);
    console.log("Successfully connected to the database");
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('====================================');
    console.log(`Server is running on port ${port}`);
    console.log('====================================');
})