const http = require('http');
const log = require('./discord.js');

http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    const chunks = [];

    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
        const data = Buffer.concat(chunks);

        try{
            let jsonData = data.toJSON()

            log('Webhook Recived And Was JSON', '#00ff00')
        } catch(e){
            log('Webhook Recived But Wasn\'t JSON', '#ff7700');
        }

        res.write('why helo there...');
        res.end();
    })
}).listen(112);