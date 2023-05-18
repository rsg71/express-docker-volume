const express = require('express');

const app = express();

const PORT = 3100

app.get('/', (req, res) => {
    res.send('Hi there jack abcefghijk')
})

app.listen(PORT, () => {
    console.log('App is listening on port ', PORT);
})

