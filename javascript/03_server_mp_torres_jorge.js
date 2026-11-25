import { createServer } from 'node:http';

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Twin Ovens</h1><p>Panaderia en Quito Ecuador</p><p>Tenemos guaguas de pan, pan de yuca, pan de Ambato, pan de chocolate y pan de masa madre</p>');
    } else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Contacto Twin Ovens</h1><p>Visitanos en Quito Ecuador</p><p>Escribenos a hola@twinovens.example</p>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Pagina no encontrada</h1>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor Twin Ovens en Quito Ecuador en 127.0.0.1:3000');
});
