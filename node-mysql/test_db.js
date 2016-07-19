//处理

var mysql = require('mysql')
var async = require('async')

var config = {
	host: 'localhost',
	user: 'root',
	password: '111',
	database: 'test',
	port: 3306
}

var conn = initConnection(config)

function initConnection(config) {
	function handleDisConnection(conn) {
		conn.on('error', function(err) {
			if (err instanceof Error) {
				if (err.code == 'PROTOCOL_CONNECTION_LOST') {
					console.error(error.stack)
					console.log("Lost connection. Reconnecting...")

					initConnection(conn.config)
				}else if(err.fatal){
					throw err
				}
			}
		})
	}
	var conn = mysql.createConnection(config)

	handleDisConnection(conn)
	conn.connect()
	return conn
}

function work() {
	var insertSql = 'insert into user (name,age) values (?,?)'

	// for (var i = 0; i < 1; i++) {
	db.query(insertSql, ['小明', 18], function(err, result) {
		if (err) console.log(err)

		console.log("INSERT Return ==> ");
		console.log(result);

		// db.end()
	})
}


for (var i = 0; i < 5; i++) {
	work()
}