const express = require('express');

let messages = []

const app = express();

//allow the use of static files in (front-end code)
app.use(express.static('public'));
// setting up the first handler for the route
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// read data from the body of incoming requests and make it available in request.body
app.get('/test',(request, response) => {
    response.send('My project 4 server is live!');
})

// this is the handler for the form submission
app.post('/sign', (request, response) => {
    console.log(request.body);
    const guestName = request.body.guestName; 
    const guestMessage = request.body.guestMessage;
    messages.push({
        name: guestName,
        message: guestMessage
    });

    // //we need to send a response back to the client in every request
    // response.send('Thank you for signing!');
    // // after the form is submitted, we want to redirect the user back to the guestbook page
    // setTimeout(() => {
    //     response.redirect('/guestbook.html');
    // }, 1000); // wait for 1 second before redirecting
    response.redirect('/thankYou.html');
})

app.get('/messages', (request, response) => {
    response.send(messages);
    response.json(messages);
});

app.listen(9000,()=>{
    console.log('Server is running on port 9000');
})