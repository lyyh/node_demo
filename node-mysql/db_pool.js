//线程池demo

var mysql = require('mysql');
var config = {
	host: 'localhost',
	user: 'root',
	password: '111',
	database: 'test',
	port: 3306
}

var pool = mysql.createPool(config);

function work() {
	pool.getConnection(function(err, conn) {
		conn.query('SELECT * FROM user', function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				var jsonStr = JSON.stringify(rows[0])
				var obj = JSON.parse(jsonStr)
				console.log(obj.name);
			}
			// And done with the connection.
			conn.release();
			// Don't use the connection here, it has been returned to the pool.
		});
	})
}
work();