var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

//var connection = mysql.createConnection({
var pool  = mysql.createPool({	
  host     : 'us-cdbr-iron-east-05.cleardb.net',
  user     : 'bde157d6419a4b',
  password : '55b5a6ac',
  database : 'heroku_8fa0310298c869f'
});

//connection.connect(function(err) {
pool.getConnection(function(err, connection) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//module.exports = connection;
module.exports = pool;