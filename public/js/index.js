const socket = io();
const print = console.log

socket.on("connect", () => {
    // User Connected
    console.log(socket.id);
});

// io  

//io ---> server big connection 
