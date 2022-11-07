let http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url == '/'){
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write('<h1> Allah Mohan Show By Home Page </h1>');
        res.end();
    }else if(req.url == '/about'){
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write('<h1>This is about page</h1>');
        res.end();
    }
    else if(req.url == '/contact'){
        res.writeHead(200, {"Content-type" : 'text/html'});
        res.write('<h1>This is contact page</h1>');
        res.end()
    }
});

server.listen(8081);

function newFunction() {
    let http;
    return http;
}
