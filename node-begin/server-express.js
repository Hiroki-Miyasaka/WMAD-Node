const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
// initialize express
app.use(cors());
// use cors
app.use(bodyParser.json());
// use body-parser
app.use(bodyParser.urlencoded({extended:false}));
// use body-parser for url
app.get('/', function(req, res) {
    res.send("Hello Developer!");
})
// get request / endpoint
app.get('/home', function(req, res){
    res.sendFile(__dirname + "/views" + "/index.html");
    // res.send('Welcome Home!')
}) // get request / endpoint

app.get('/about', function(req, res){
    res.sendFile(__dirname + '/views' + '/about.html');
    //sends file to client
})

app.get('/person', function(req, res){
    res.json({firstName:'Hiroki', lastName:'Miyasaka'});
    
})

app.get('/facebook', function(req, res){
    res.sendFile(__dirname + '/views' + '/facebook.html');
})

app.get('/twitter', function(req, res){
    res.sendFile(__dirname + '/views' + '/twitter.html');
})

app.listen(5001);


