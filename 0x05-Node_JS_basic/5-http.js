// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end('Hello Holberton School!');
    } else if (url === '/students') {
        res.setHeader('Content-Type', 'text/plain');
        countStudents(process.argv[2])
            .then(() => {
                res.end('This is the list of our students\n');
            })
            .catch((err) => {
                res.statusCode = 500;
                res.end(err.message);
            });
    }
});

app.listen(1245);

module.exports = app;
