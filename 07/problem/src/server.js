import express from "express";
import {getLocations, updateLocation} from "./service/locations";
import bodyParser from 'body-parser';

// import config
...

let app = express();

app.use(bodyParser.json());

// switch to serve from baseUrl
app.use("/static", express.static("static"));

// switch to serve from baseUrl
app.use("/dist", express.static("dist"));


let router = express.Router();
router.get("/locations" , (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(getLocations(req.query.num));
});

router.post("/location", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(updateLocation(req.body));
});

// switch to serve from baseUrl
app.use('/', router);

app.listen(3000, () => (
    console.log("listening on port 3000")
));
