var express = require('express');
var router = express.Router();

router.get('/discuz', function(req, res){
	res.render('conapp/discuz');
})

module.exports = router;