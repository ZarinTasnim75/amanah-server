import http from 'node:http';

const PORT = 5000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'Welcome to AMANAH API!'
        }));
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Route not found'
        }));
    }
});

server.listen(PORT, () => {
    console.log(`AMANAH Server running at http://localhost:${PORT}`);
});