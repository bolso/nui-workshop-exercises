import path from "path";

export default {
    entry : "./lib/app.js",
    output : {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    }
}
