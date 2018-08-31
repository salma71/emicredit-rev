const express = require('express')
require('./services/passport')
// const authRoutes = require('./routes/authRoutes')

const app = express()

// authRoutes(app)
require('./routes/authRoutes')(app)

// means in the production use the provided port
// otherwise in the development env use port 5000
const PORT = process.env.PORT || 5000
app.listen(PORT)
