const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')


const route = require('./routes/ToDoRoutes')

require('dotenv').config()

const app = express()


app.use(cors())
app.use(express.json())
const PORT = process.env.port || 3000


mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err))


app.use(route)

app.listen(PORT , ()=> console.log('liting on port'))