const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    const chunks = [];

    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
        const data = Buffer.concat(chunks);
        console.log('Data: ', data.toString());
    })
}).listen(111);