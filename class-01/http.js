// const http2 = require('http');
// const server = http2.createServer((req, res)=> {
//     res.end('Allah Mohan display by second server')
// });
// server.listen(8080);

import http from 'http';

http.createServer(function(req, res){
    res.end(`<h2> Allah Mohan, Allah Mohan, Allah Mohan</h2>`);
}).listen(8080);

console.log('Server start successfully');