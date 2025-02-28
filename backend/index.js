const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRoute = require('./Routes/AuthRouter')
const ProductRoute = require('./Routes/ProductRouter')
require('dotenv').config();
require('./Models/db')

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors())
app.use('/auth', AuthRoute)
app.use('/products', ProductRoute)

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})