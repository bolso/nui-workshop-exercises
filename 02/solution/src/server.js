import express from "express";
//importing getLocations and updateLocation functions
import {getLocations, updateLocation} from "./service/locations";

//import body-parser package
import bodyParser from 'body-parser';

//init express
let app = express();

// add json body-parser
app.use(bodyParser.json());

app.use("/static", express.static("static"));

//add /lib folder to list of express statics
app.use("/lib", express.static("lib"));


//changed to fat arrow, using getLocations imported fn
app.get("/locations" , (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(getLocations(req.query.num));
});

// add locations POST api to add json location to
// locations array
app.post("/location", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(updateLocation(req.body));
});

app.listen(3000, () => (
    console.log("listening on port 3000")
));
