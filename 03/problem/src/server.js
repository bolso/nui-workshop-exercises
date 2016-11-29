import express from "express";
import {getLocations, updateLocation} from "./service/locations";
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());

app.use("/static", express.static("static"));

//change /lib to dist to serve client bundles from /dist folder
app.use("/lib", express.static("lib"));

let router = express.Router();
router.get("/locations" , (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(getLocations(req.query.num));
});

router.post("/location", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(updateLocation(req.body));
});
app.use('/', router);

app.listen(3000, () => (
    console.log("listening on port 3000")
));
