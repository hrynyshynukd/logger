import { appendFile } from 'node:fs';

const logFile = 'server.txt'; 

export function logRequest(req) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const timestamp = new Date().toISOString();

    const logEntry = `[${timestamp}] IP: ${ip}, User-Agent: ${userAgent}\n`;

    console.log(logEntry); +
    appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Помилка запису в лог-файл:', err);
    });
}
