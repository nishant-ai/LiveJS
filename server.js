const express = require('express');
const app = express();
const fs = require('fs');
const {Server} = require('socket.io');

// Import Middlewares
const {mw, somefunc} = require('./middlewares/mw');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false})); // for access of POST data
app.use(express.static('public'));

// Landing Page
app.get('/', (req, res) => {
    res.status(200).json({jo_bolta_hai: 'vahi hota h'})
})
const age=()=>{
    console.log("age this year");
}

app.use(mw);

// Home Page
app.get('/home', (req, res, next) => {
    obj = {videoName: null};
    console.log("Home -- GET");
    res.render('index', obj);
    // next();
    age();
})

app.use(somefunc);

app.post('/home', (req, res) =>{
    fs.appendFile('data.txt', `${req.body.message}\n` ,(err) => {
        some = req.body.message;    
        if (err) throw err;
        console.log('Saved!');
    });
    console.log("Home -- POST");
    res.render('index', {videoName: 'video.mp4'});
})

// SocketIO
// app.get('socket', (req, res) => {

// })

// io.on("connection", (socket) => {
    
// });

app.listen(3000, () => {
    console.log("Sab Moj me!");
});