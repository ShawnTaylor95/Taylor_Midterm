var express = require('express');
var fetch = require('node-fetch');

var app = express();

//Port information
const port = process.env.port || 3000;


//tell application to use ejs for templates
app.set('view engine', 'ejs');
//make styles public
app.use(express.static("public"));

app.get('/', function(req,res){
//return something to homepage
    //res.render('index');
    return res.redirect('/comic');

});

app.get('/comic', function(req,res){
    fetch('http://xkcd.com/info.0.json')
    .then(res => res.json())
    .then(data => {
        res.render('index', {data: data});
        //console.log(data);
    });
});

app.get('/ranComic', function(req,res){
    fetch('http://xkcd.com/614/info.0.json')
    .then(res => res.json())
    .then(randomData => {
        res.render('ranComic', {randomData: randomData});
        console.log(randomData);
    });
});

//Server setup
app.listen(port,function(){
    console.log('Listening on ' + port)
});
