var express = require('express');
var fetch = require('node-fetch');

var app = express();

//Port information
const port = process.env.PORT || 3000;


//tell application to use ejs for templates
app.set('view engine', 'ejs');
//make styles public
app.use(express.static("public"));

app.get('/', function(req,res){
//return something to homepage
    //res.render('index');
    return res.redirect('/comic');

});


//fetches comic api data and send it to frontend of /comic
app.get('/comic', function(req,res){
    fetch('http://xkcd.com/info.0.json')
    .then(res => res.json())
    .then(data => {
        res.render('index', {data: data});
    });
});

//fetches random comic api data and send it to frontend of /rancComic
app.get('/ranComic', function(req,res){
    var ranNumber = Math.floor(Math.random() * 2373) + 1;
    fetch('http://xkcd.com/'+ranNumber+'/info.0.json')
    .then(res => res.json())
    .then(randomData => {
        res.render('ranComic', {randomData: randomData});
    });
});


//Server setup
app.listen(port,function(){
    console.log('Listening on ' + port)
});
