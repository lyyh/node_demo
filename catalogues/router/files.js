var express = require('express');
var router = express.Router();
var readFile = require('../file_util/readFiles');

router.get('/nav',function(req,res,next){
	var listJson = readFile();
	res.json({
		navList:listJson
	})
})

module.exports = router;