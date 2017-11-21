var orm = require("./config/orm.js");

var burger = {

  selectAll: function(cb) {
  	orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(dataObj, cb) {
  	orm.insertOne("burgers", dataObj, function(res) {
      cb(res);
    });
  },
  updateOne: function(updateValObj, searchValObj, cb) {
    orm.updateOne("burgers", updateValObj, searchValObj, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;