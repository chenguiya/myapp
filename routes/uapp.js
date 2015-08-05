var express = require('express');
var router = express.Router();

router.get('/index', function(req, res){
	res.render('5uapp/index');
})

module.exports = router;