var express = require('express');
// var app = express();
var app = express.createSever();
app.use(express.bodyParser());
app.all("/",function(req,res){
	res.send(req.body.title+req.body.text);
});
app.lieten(3000);