const express  = require('express')
const blogStats = require('./Routes/blog-stats')
const blogSearch = require('./Routes/blog-search')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())


app.get('/api/blog-stats',(req,res)=>{
    blogStats(req,res)
})

app.get('/api/blog-search',(req,res)=>{
    blogSearch(req,res)
})


app.listen(8000,()=>{
    console.log("Server Started")
})