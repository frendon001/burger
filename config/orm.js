var pool = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {

  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    // connection.query(queryString, [tableInput], function(err, result) {
    //   if (err) throw err;
    //   cb(result);
    // });
    pool.getConnection(function(err, connection) {
      // Use the connection
      connection.query(queryString, [tableInput], function(error, results, fields) {
        // And done with the connection.
        connection.release();
        // Handle error after the release.
        if (error) throw error;
        //use call back function
        cb(results);
      });
    });
  },
  insertOne: function(tableInput, dataObj, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    // connection.query(queryString, [tableInput, dataObj], function(err, result) {
    //   if (err) throw err;
    //   cb(result);
    // });
    pool.getConnection(function(err, connection) {
      // Use the connection
      connection.query(queryString, [tableInput, dataObj], function(error, results, fields) {
        // And done with the connection.
        connection.release();
        // Handle error after the release.
        if (error) throw error;
        //use call back function
        cb(results);
      });
    });
  },
  updateOne: function(tableInput, updateValObj, searchValObj, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    // connection.query(queryString, [tableInput, updateValObj, searchValObj], function(err, result) {
    //   if (err) throw err;
    //   cb(result);
    // });
    pool.getConnection(function(err, connection) {
      // Use the connection
      connection.query(queryString, [tableInput, updateValObj, searchValObj], function(error, results, fields) {
        // And done with the connection.
        connection.release();
        // Handle error after the release.
        if (error) throw error;
        //use call back function
        cb(results);
      });
    });
  }
};

module.exports = orm;