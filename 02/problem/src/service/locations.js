//change to import
var uuid = require('uuid');

// create "location array"
var locations = [
    {country: "Germany", city: "Frankfurt", numEmployees: 20},
    {country: "France", city: "Paris", numEmployees: 121},
    {country: "Russia", city: "Moscow", numEmployees: 2},
    {country: "USA", city: "Minneapoilis", numEmployees: 2001}
]

//chage to ES6 map/assign
for (var i = 0; i < locations.length; i++) {
    locations[i].id = uuid.v4();
}

//use es6 export and fat arrow
exports.getLocations = function(n) {
    return locations.slice(0, n);
}

//add updateLocation function that accepts location Object
//and appends it to locations array and returns new array
//of locations. use ES6 syntax as much as you can.
