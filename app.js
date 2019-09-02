require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3200
const bodyParser = require('body-parser')
const xss = require('x-xss-protection')
const categoryRoutes = require('./src/routes/category')
const noteRoutes = require('./src/routes/note')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(xss())
app.listen(port,()=>{
    console.log(`We are running on port ${port}`)
})
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods' , '*')
    res.setHeader('Access-Control-Allow-Headers' , '*')
    next();
  });
app.use(express.static('./src/uploads'))
app.use('/category',categoryRoutes)
app.use('/note',noteRoutes)