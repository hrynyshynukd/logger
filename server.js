import { createServer } from 'node:http';
import { logRequest } from './logger.js';

const server = createServer((req, res) => {
    logRequest(req); 

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello!\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:3000');
});
