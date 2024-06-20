const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()

app.use(express.json())

const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
  app.listen(PORT,()=>{
      console.log("connnect to DB")
      console.log("Server is running "+PORT)
  })
})

