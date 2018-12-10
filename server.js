const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use((express.static('build/contracts')));

app.get('/', (req, res) => {
    res.render('index.pug');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});