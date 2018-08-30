const express = require('express')
const app = express();

// route handler in Express
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listen(5000)
