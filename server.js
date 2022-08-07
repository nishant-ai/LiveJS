const express = require('express');
const fs = require('fs');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false})); // for access of POST data
app.use(express.static('public'));


// Landing Page
app.get('/', (req, res) => {
    res.status(200).json({jo_bolta_hai: 'vahi hota h'})
})


// Home Page
app.get('/home', (req, res) => {
    obj = {videoName: null};
    console.log("Home -- GET");
    res.render('index', obj);
})

app.post('/home', (req, res) =>{
    fs.appendFile('data.txt', `${req.body.message}\n` ,(err) => {
        some = req.body.message;    
        if (err) throw err;
        console.log('Saved!');
    });
    console.log("Home -- POST");
    res.render('index', {videoName: 'video.mp4'});
})


//  Room Join Page
app.get('/joining', (req, res)=> { 
    res.render('joining');
})

app.get('/room', (req, res) => {
    res.render('room');
})


// Server Instantiation
const server = http.Server(app);
// SocketIO
const io = socketIO(server);
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/user');

io.on('connection', (socket) => {
    // User Connected

    socket.on("join-room", (data)=>{
        const user = userJoin(socket.id, data.username, data.room);
        socket.join(user.room);
        // console.log("User: ", user);
    })

    socket.on('message',(msg)=>{
        // console.log(socket.id, msg);
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('revert-msg' ,msg);
    })
})


server.listen(3000, () => {
    console.log("Sab Moj me!");
});


/*
app - express (request handler function)

server (app) => SERVER

SOCKETIO(SERVER)
*/