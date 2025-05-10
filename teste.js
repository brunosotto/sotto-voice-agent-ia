import Fastify from 'fastify';
import fastifyWs from "@fastify/websocket";

const fastify = Fastify();

fastify.register(fastifyWs);

fastify.ready(err => {
    if (err) throw err;

    fastify.ws.on('connection', (socket, req) => {
        console.log('Novo cliente conectado');

        socket.on('message', message => {
            console.log(`Mensagem recebida: ${message}`);
            socket.send(`Echo: ${message}`);
        });

        socket.on('close', () => {
            console.log('Cliente desconectado');
        });
    });

    console.log('Servidor WebSocket rodando na porta 8080');
});

fastify.listen({ port: 8080 }).then(() => {
    console.log('Fastify está pronto!');
});
