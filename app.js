const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

let messages = [];

app.get('/messages', (request, response) => {
    index = 0;
    let arr = messages.slice(index, messages.length);
    response.send(arr); 
});

app.post('/message', (request, response) => {
    messages.push({user: request.body.user, message: request.body.message});
    console.log(request.body);
});

app.listen(port, () =>{
    console.log(`test`);
});