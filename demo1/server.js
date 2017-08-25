const WebSocket = require('ws');
const express = require('express');
let app = express(); 

app.use(express.static("."));


app.listen(8085, (req, res) => {
    console.log('listening..')
});

const wss = new WebSocket.Server({ port: 8080 });
var clients = []
wss.on('connection', function connection(ws) {
    ws.on('message', (data) => {
        console.log(data);
        for (var c of clients){
            if (c !== ws) c.send(data);
        }
    });
    clients.push(ws);
});
setInterval(()=>{
    if (clients.length > 0) {
        for (var c of clients)
            c.send('tick'); 
    }
}, 1000); 
 
