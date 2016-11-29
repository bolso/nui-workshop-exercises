// rewrite to import
var express = require("express");

//rewite to imprt getLocations function
var locations = require("./service/locations");

//import body-parser package

//change to use constant
var app = express();

// add json body-parser

app.use("/static", express.static("static"));

//add /lib to the list express static


// rewrite using exporess.Router
//chage to fat-arrow
app.get("/locations" , function(req, res) {
    res.set("Content-Type", "application/json");
    // fix to use imported function
    res.send(locations.getLocations(req.query.num));
});

// add locations POST api to add json location to
// locations array
...


// change to ES6 fat arrow
app.listen(3000, function() {
    console.log("listening on port 3000")
});
