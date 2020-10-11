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
    res.render('index');

});


//Server setup
app.listen(port,function(){
    console.log('Listening on ' + port)
});