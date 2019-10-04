const parseJSON = (xhr, content) => {
    const obj = JSON.parse(xhr.response);
    console.dir('Json Parse');

    // if there is a user message to display:
    if (obj.userMessage) {
        const p = document.createElement('p');
        p.textContent = obj.userMessage;
        content.appendChild(p);
    }
};

const sendPost = (e, loginForm, messageForm) => {

    const loginAction = loginForm.getAttribute('action');
    const loginMethod = loginForm.getAttribute('method');

    //const username = loginForm.get
};

const handleResponse = (xhr, parseResponse) => {
    // Get a reference to where all messages will go
    const content = document.querySelector('#message-area');

    // 
    if (parseResponse) {
        const obj = JSON.parse(xhr);
        console.dir(obj);
    }

    // If successful, update the message area content with the sent message
    switch (xhr.response) {
        case 200:
            content.innerHTML = `${xhr.response}`;

    }
};

const psuedoLogin = () => {
    console.log("CLick");

    let n = prompt("Enter your name:");

    if (n == null || n == "") {
        console.log("Please enter a name");
    } else {
        console.log("successful adding of nickname");
    }
};

const init = () => {
    // Confirm init is loading
    console.log('Loading Init...');

    // refer to the form for our username
    const usernameForm = document.querySelector('#usernameForm');

    usernameForm.addEventListener('submit', psuedoLogin);

    // refer to the form for submitting messages
    //const sendMessage = document.querySelector('#message-area');
};

window.onload = init;
