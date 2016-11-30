import path from "path";

//import NuiAssetsPlugin
...

//import config
...

export default {
    entry : "./lib/app.js",
    output : {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
        //change to serve from baseUrl
        publicPath: "/dist/"
    }
    // add plugins section with NuiAssetsPlugin
    ...

    // add loaders section with json-loader
    ...
}
