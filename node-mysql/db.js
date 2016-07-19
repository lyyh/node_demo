//处理

var mysql = require('mysql')
var async = require('async')

var config = {
	host: 'localhost',
	user: 'root',
	password: '111',
	database: 'tes',
	port: 3306
}

var conn = initConnection(config)

// 连接数据库
function initConnection(config) {
	function handleError(err) {
		if (err) {
			// 如果是连接断开，自动重新连接
			if (err.code === 'PROTOCOL_CONNECTION_LOST') {
				console.error(error.stack);
				console.log("Lost connection. Reconnecting...");
				
				initConnection(config);
			} else {
				console.error(err.stack || err);
			}
		}
	}

	db = mysql.createConnection(config);
	db.connect(handleError);
	db.on('error', handleError);
	return db;
}

function work() {
	var insertSql = 'insert into user (name,age) values (?,?)'

	db.query(insertSql, ['小明', 18], function(err, result) {
		if (err) console.log(err)

		console.log("INSERT Return ==> ");
		console.log(result);

	})
}


for (var i = 0; i < 5; i++) {
	work()
}