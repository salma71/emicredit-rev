const express = require('express')
const app = express();

// route handler in Express
app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
});

// means in the production use the provided port
// otherwise in the development env use port 5000
const PORT = process.env.PORT || 5000
app.listen(PORT)
