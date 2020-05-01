const http = require('http');
let server = http.createServer((req, res) => {
    res.end("SUCCESS server is up")
})

server.listen(3001);
