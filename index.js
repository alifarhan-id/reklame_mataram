const express = require("express");
const bodyParser = require('body-parser')
const db = require('./api/config')
const app = express();

app.use('/resources',express.static('resources'));
app.use('/app',express.static('app'));
app.use('/ext',express.static('ext'));
app.use('/desktop',express.static('desktop'));
app.use('/app.js',express.static(__dirname + '/app.js'));
app.use('/app.json',express.static(__dirname + '/app.json'));
app.use('/bootstrap.js',express.static(__dirname + '/bootstrap.js'));
app.use('/bootstrap.json',express.static(__dirname + '/bootstrap.json'));
app.use('/bootstrap.css',express.static(__dirname + '/bootstrap.css'));


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get("/reklame_mataram",function(req,res){
	res.sendFile(__dirname+"/"+"index.html");
});

app.get('/api/kelurahan', db.getKelurahan)


app.get('/api/masterdata', db.getMasterdata)

var server = app.listen(4000,function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Reklame_mataram Listening at http://%s:%s Created by Ali Farhan",host,port);
})
