
exports.mix = function(){
	if (arguments.length>1) {
		var base = arguments[0];
		Array.prototype.slice.call(arguments).forEach(function(obj){
			if ( base !== obj ) {
				for (var k in obj) {
					base[k] = obj[k];
				}
			}
		});
	}
	return arguments[0];
};

exports.parseRaw = function(){

	return function(req, res, next){
		var buffers = [];
		req.on('data', function (trunk) {
			buffers.push(trunk);
		});
		req.on('end', function () {
			req.rawbody = Buffer.concat(buffers).toString('utf8');
			next();
		});
		req.once('error', function(err){ 
			console.log(err);
			next(err);
		});
	}
};