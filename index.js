var http = require('http');
var express = require('express')
var port = process.env.PORT || 8080;
var app = express();
http.createServer(app).listen(port);
var appRoutes = require('./routes/appRouter');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb://localhost/meanDb',{useMongoClient:true})

app.use(cors)
app.use('/',appRoutes);
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
console.log('backend running on port :',port);