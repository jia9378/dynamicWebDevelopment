const express = require('express');
// const bodyParser = require('body-parser');

// //middleware to parse the body of incoming requests
// app.use(bodyParser.urlencoded({ extended: true }));
// //setting up application
// //instance of express class

let messages = []

const app = express();

//allow the use of static files in (front-end code)
app.use(express.static('public'));
// setting up the first handler for the route
app.get('/test',(request, response) => {
    response.send('My server is live!');
})
app.post('/sign', (request, response) => {
    console.log(request.body);
    messages.push({
        name: request.body.guestName,
        message: request.body.guestMessage
    });

    //we need to send a response back to the client in every request
    response.send('Thank you for signing!');
})

app.get('/messages', (request, response) => {
    response.send(messages);
});

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})