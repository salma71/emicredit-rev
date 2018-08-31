const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')
// const authRoutes = require('./routes/authRoutes')

mongoose.connect(keys.mongoURI)

const app = express()

// authRoutes(app)
require('./routes/authRoutes')(app)

// means in the production use the provided port
// otherwise in the development env use port 5000
const PORT = process.env.PORT || 5000
app.listen(PORT)
