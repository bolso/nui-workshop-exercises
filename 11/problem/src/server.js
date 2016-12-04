import express from "express";
import {getLocations, updateLocation} from "./service/locations";
import bodyParser from 'body-parser';

import config, {configDefaults} from './config';

import {initApp} from '@concur/nui-shell/lib/server';

import configureStore from './configureStore';

import routes from './routes';

import assets from '../assets';


let app = express();

app.use(bodyParser.json());

app.use(`${config.nui.baseUrl}/static`, express.static("static"));
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

app.use(`${config.nui.baseUrl}`, router);

initApp({app, routes, assets, config:configDefaults}, configureStore);

app.listen(3000, () => (
    console.log("listening on port 3000")
));
