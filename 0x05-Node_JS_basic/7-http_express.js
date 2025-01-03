// 7-http_express.js
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    try {
        await countStudents(process.argv[2]);
        res.send('This is the list of our students');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(1245);

module.exports = app;
