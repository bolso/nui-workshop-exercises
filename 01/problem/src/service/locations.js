// require uuid module
var uuid = require('uuid');

// create "location array"
var locations = [
    {country: "Germany", city: "Frankfurt", numEmployees: 20},
    {country: "France", city: "Paris", numEmployees: 121},
    {country: "Russia", city: "Moscow", numEmployees: 2},
    {country: "USA", city: "Minneapoilis", numEmployees: 2001}
]

// assign unique ID for each  location using
// uuid.v4() function

// create and export getLocations function
// that accepts number of locations as a parameter
// and returns top n locations from locations array
