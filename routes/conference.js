var express = require('express');
var mongodb = require('../lib/mongodb');
var router = express.Router();

router.get('/map', function(req, res){
	res.render('conference/map');
})
router.get('/schedule', function(req, res){
	res.render('conference/schedule');
})

router.route('/vote').get(function(req,res){
	var depart = req.query.depart||1;

		ep.all('vote', 'staff', 'userinfo', function(vote, staff, userinfo){
			res.render('conference/vote', { userid:req.query.user, staff:staff, voted:vote, userinfo:userinfo });
		});
})
module.exports = router;