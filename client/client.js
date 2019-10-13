const parseJSON = (xhr, content) => {
    const obj = JSON.parse(xhr.response);
    console.dir(obj);
    
    // if there is a user message to display:
    if(obj.userMessage) {
        const p = document.createElement('ul');
        p.textContent = obj.userMessage;
        content.appendChild(p);
    }
}

const sendPost = (e, loginForm) => {
    // action is the url to go to
    // method is POST, HEAD, etc.,
    const url = 
    //const messageSend = loginForm.getAttribute('action');
    //const loginMethod = loginForm.getAttribute('method');
    
    // new ajax request
    //const xhr = new XMLHttpRequest();
    
    xhr.open('POST', loginAction);
    
    xhr.setRequestHeader('Accept', 'application/json');
    
    xhr.onload = () => handleResponse(xhr);
    
    xhr.send();
}

const handleResponse = (xhr) => {
    // Get a reference to where all messages will go
    const content = document.querySelector('#message-thread');
    
    console.log(xhr.response);
    
    /*if (parseResponse) {
        const obj = JSON.parse(xhr);
        console.dir(obj);
    }*/
    
    // If successful, update the message area content with the sent message
    switch(xhr.response) {
        case 200:
            content.innerHTML = `${xhr.response}`;
    }
    
    // The xhr object passed to parseJSON
    parseJSON(xhr, content);
}

const setNickname = (e, usernameForm) => {
    //console.log("CLick");
    const url = usernameForm.getAttribute('action');
    const method = usernameForm.getAttribute('method');
    // idea is to update p to reflect user inputted nickname
    const p = document.querySelector('#nickname-input').value;
    
    //console.log(`p: ${p}`);
    
    // If there has been no user input, alert the user
    // that they must provide a nickname
    if(p == "" || p == "nickname") {
        //console.log("Please enter a name");
        alert("Please enter a nickname");
    } else {
        // if it works, create an ajax request
        const xhr = new XMLHttpRequest();
        // set method and destination
        xhr.open(method, url);
        // set request type
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onload = () => handleResponse(xhr);
        xhr.send();
        
        // an update to reflect what the current user nickname is
        document.querySelector('#name-label').innerHTML = p;
    }
    
    e.preventDefault();
    
    return false;
}

const sendMessage = (e, sendArea) => {
    //console.log("click");
    // create a new li object that will be added to the global
    // ul message area
    //const m = document.createElement("li");
    
    // action is the url to navigate to
    const url = sendArea.getAttribute('action');
    
    // method is post, get, etc.,
    const method = sendArea.getAttribute('method');
    
    const u_m = document.querySelector("#user-message");
    
    //console.log(url);
    
    if (u_m.value == "") {
        alert("Please enter a message");
    } else {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onload = () => handleResponse(xhr);
        xhr.send();
        m.innerHTML = u_m.value;
    }
    
    e.preventDefault();
    
    return u_m;
}

const init = () => {
    // Confirm init is loading
    //console.log('Loading Init...')
    
    // refer to the form for our username
    const usernameForm = document.querySelector("#usernameForm");
    const addUser = (e) => setNickname(e, usernameForm);
    usernameForm.addEventListener('submit', addUser);
    
    const sendMessageForm = document.querySelector('#send-area');
    const sendMsg = (e) => sendMessage(e, sendMessageForm);
    sendMessageForm.addEventListener('submit', sendMsg);
    
    // refer to the form for submitting messages
    //const sendMessage = document.querySelector('#message-area');
}

window.onload = init;