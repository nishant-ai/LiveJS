// const socket = io();

// var joinRoom = document.getElementById('join-room');

// const params = new Proxy(new URLSearchParams(window.location.search), {
//     get: (searchParams, prop) => searchParams.get(prop),
// });

// const data = {
//     username: params.username,
//     room: params.room
// }

// socket.on('connect', ()=> {
//     console.log('hogaya na connect');
// })

// joinRoom.addEventListener('click', (event)=>{
    
//     const room = document.getElementById('room').value;
//     const username = document.getElementById('username').value;

//     socket.emit('join-room', {room, username});
// })