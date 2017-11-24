var express = require("express");
var bodyParser = require("body-parser");

var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);





// var orm = require("./config/orm.js");

// //Find all parties, ordering them by party cost
// orm.selectAll("burgers", function(res){console.log(res);});

// // Find parties by the name of the party
// orm.insertOne("burgers", {burger_name: "My New Burger", devoured: false, date: "2017-11-21 16:15:10"},function(res){console.log(res);});

// // Find and join all clients with their parties
// orm.updateOne("burgers", {devoured: true}, {burger_name: "BBQ Burger"},function(res){console.log(res);});