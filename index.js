// index.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Image docker qa sur environnement QA\n');
});


server.listen(3000, () => {
    console.log('Modification dans nouvelle-branche-feature');
});