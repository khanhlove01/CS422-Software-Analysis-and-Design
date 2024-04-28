const express = require("express")

const app = express()

// app.get('/',(req,res) => {
//     res.status(200).json({message: 'Hello World!'})
// })

// app.post('/',(req,res) => {
//     res.status(201).json({message: 'Data created!'})
// })

// //GET request
// app.get('/api/v1/')

const port = 3000
app.listen(port, () => {
    console.log('====================================');
    console.log(`Server is running on port ${port}`);
    console.log('====================================');
})