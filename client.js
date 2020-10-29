//const { response } = require("express");
const sendButton = document.getElementById("message-button");
const message = document.getElementById("message-field");
const messageHistory = document.getElementById('message-history');

let username = prompt("Please enter your username:");
let index = 0;
sendButton.addEventListener('click', push);

function push() {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: username, message: message.value}),
    }
    //fetch("http://108.44.192.139:3000/message", options) 
    fetch("http://localhost:3000/message", options)
    .then(response => response.json())
    .then(data => {
        console.log("hi");
    });
    message.value = '';
};

function pull() {
    //fetch(`http://108.44.192.139:3000/messages`) 
    fetch(`http://localhost:3000/messages`) 
    .then(arr => arr.json())
    .then(arr => {
        // Loop through all new messages
        for(let i = index; i < arr.length; i++){
            messageHistory.innerHTML += '<span><strong>' + arr[i].user  + ':</strong> ' + arr[i].message + '</span>';
        }
        // Update message index so that you don't loop through old messages.
        index = arr.length;
    });
};

setInterval(() => {
    pull();
}, 1000);

