var orm = require("./config/orm.js");

//Find all parties, ordering them by party cost
orm.selectAll("burgers", function(res){console.log(res);});

// Find parties by the name of the party
orm.insertOne("burgers", {burger_name: "My New Burger", devoured: false, date: "2017-11-21 16:15:10"},function(res){console.log(res);});

// Find and join all clients with their parties
orm.updateOne("burgers", {devoured: true}, {burger_name: "BBQ Burger"},function(res){console.log(res);});