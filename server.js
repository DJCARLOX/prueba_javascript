const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // código del server

    res.writeHead(200, {'Content-Type': 'text/html'});

    const contenidohtml = '<html><head><title>Mi Primer Servidor </title></head> <body><h1>Mi Servidor en Nodejs</h1></body></html>';

    res.write(contenidohtml);
    res.end();

    console.log('Contenido del archivo: ', contenidohtml);
});

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
