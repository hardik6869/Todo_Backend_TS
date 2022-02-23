const express = require('express')
const colors =  require('color')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const path = require('path')
const {errorHandler} = require('./middleware/Error')
const connectDB = require('./config/db')
const app = express()
const cors = require('cors');
const PORT = process.env.PORT || 5000;

connectDB()


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

app.use('/api/TodoApp',require('./routes/todoRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started ${PORT}`));

