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

app.get('/comic', function(req,res){
    let todayData;
    fetch('http://xkcd.com/info.0.json')
    .then(res => res.json())
    .then(data => {
        todayData = data;
        res.json(todayData);
    });
});

/*app.post('/dailyInfo', function(req,res){
    data = req.body;
   fetch('http://xkcd.com/info.0.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

});*/

app.post('/', function(req,res){

function getDataFromAPI(todayData) {
    return fetch('http://xkcd.com/info.0.json')
        .then(response => response.json())
        .then(todayData => console.log(JSON.stringify(todayData, null, "\t")))
}
        getDataFromAPI()
        console.log(todayData);
        res.redirect('/')
});


//Server setup
app.listen(port,function(){
    console.log('Listening on ' + port)
});
