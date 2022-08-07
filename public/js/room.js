const socket = io();

// Join Room.
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const userJoinData = {
    username: params.username,
    room: params.room
}

socket.emit('join-room', userJoinData);

// Send Message.
const sendMessageBtn = document.getElementById('send-msg');

sendMessageBtn.addEventListener('click', (event) => {
   event.preventDefault();
   const msg = document.getElementById('message').value;
   socket.emit('message', msg);
   document.getElementById('message').value = '';
})

socket.on('revert-msg',data => {
    createDiv(data);
})


// Helper Functions
const createDiv= (msg) =>{
    var b= document.createElement('p');
    b.innerHTML=msg;
    document.body.appendChild(b);
}