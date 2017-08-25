const express = require('express');
const bodyParser = require("body-parser");
const webpush = require('web-push');

let app = express(); 
var sub = null; 

app.use(express.static("."));
app.use(bodyParser.json());

app.post('/subscription', (req, res) => {
    console.log('req', req.body);
    sub = req.body;
    res.end("OK");
});

app.listen(8080, (req, res) => {
    console.log('listening..')
});

setInterval(()=>{
    if (sub){
        console.log('sending a message...');
        webpush.sendNotification(sub, 'Your Push Payload Text');     
    }
}, 10000); 


// VAPID keys should only be generated only once. 
// const vapidKeys = webpush.generateVAPIDKeys();
// webpush.setGCMAPIKey('<Your GCM API Key Here>');
 /*
        Public Key

BAXlPghumJMmq3o6VMEljr0V7lkLQfd3PPw00bXcUqV9KktsNcJArBOFIsjXWYFjPVI74VfNmfqYBU7YZmyjSh4
Private Key

BLfCE21JE4MXXMiFTD4UlLc-SwzivXqDpI_zL-1E9nE

        */
        
 webpush.setVapidDetails(
  'mailto:john.gorter@gmail.com',
  'BAXlPghumJMmq3o6VMEljr0V7lkLQfd3PPw00bXcUqV9KktsNcJArBOFIsjXWYFjPVI74VfNmfqYBU7YZmyjSh4',
  'BLfCE21JE4MXXMiFTD4UlLc-SwzivXqDpI_zL-1E9nE'
 );

// // This is the same output of calling JSON.stringify on a PushSubscription 
// const pushSubscription = {
//  endpoint: '.....',
//  keys: {
//    auth: '.....',
//    p256dh: '.....'
//  }
// };

// webpush.sendNotification(pushSubscription, 'Your Push Payload Text');