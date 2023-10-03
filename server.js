const http = require('http');

const server = http.createServer((req, res) =>{
    console.log("Request made")
});

res.set

server.listen(3000, 'localhost', () =>{
    console.log("listning on 3000 port");
});