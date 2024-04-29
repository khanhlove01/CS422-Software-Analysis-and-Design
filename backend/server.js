const app = require('./app')
const dotenv = require('dotenv')

//console.log(app.get('env')) //development;
dotenv.config({path: './config.env'})
//console.log(process.env);
//console.log(process.env.NODE_ENV);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('====================================');
    console.log(`Server is running on port ${port}`);
    console.log('====================================');
})