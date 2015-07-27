
var mongoskin = require('mongoskin');

var _db, _dbname, _col, _colname;

module.exports = {
	
	db : function(dbname){
		this.url = "mongodb://localhost:27017/"+dbname+"?authSource=admin";
		_dbname = dbname;
		_db = mongoskin.db(this.url, { native_parser:true, w:0 });
		return this;
	},

	in : function(index){

		var col = index.split("."), __colname;
		if (col.length==2) {
			if ( col[0] !== _dbname ) this.db(col[0]);
			__colname = col[1];
		}
		else {
			__colname = index;
		}

		if (_db && _col && _colname == __colname) {
			return _col;
		}

		if (_db && __colname) {
			_colname = __colname;
			_col = _db.collection(__colname);
			return _col;
		}
	},

	get : function(){
		return _col || _db;
	},

	id : function(id){
		return mongoskin.helper.toObjectID(id);
	}

};