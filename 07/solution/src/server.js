import express from "express";
import {getLocations, updateLocation} from "./service/locations";
import bodyParser from 'body-parser';

// importing from config
import config, {configDefaults} from './config';


let app = express();

app.use(bodyParser.json());

//switching to serve from baseUrl
app.use(`${config.nui.baseUrl}/static`, express.static("static"));

//switching to serve from baseUrl
app.use(`${config.nui.baseUrl}/dist`, express.static("dist"));


let router = express.Router();
router.get("/locations" , (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(getLocations(req.query.num));
});

router.post("/location", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(updateLocation(req.body));
});

//switching to serve from baseUrl
app.use(`${config.nui.baseUrl}`, router);

app.listen(3000, () => (
    console.log("listening on port 3000")
));
