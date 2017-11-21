var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {

  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      //console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableInput, dataObj, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [tableInput, dataObj], function(err, result) {
      //console.log(result);
      cb(result);
    });
  },
  updateOne: function(tableInput, updateValObj, searchValObj, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    connection.query(queryString, [tableInput, updateValObj, searchValObj], function(err, result) {
      //console.log(result);
      cb(result);
    });
  }
};

module.exports = orm;
