import path from "path";

//importing NuiAssetsPlugin
import NuiAssetsPlugin from "@concur/nui-shell/lib/NuiAssetsWebpackPlugin";

//importing config
import config from './src/config';


export default {
    entry : "./lib/app.js",
    output : {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
        // serving from baseUrl
        publicPath: `${config.nui.baseUrl}/dist/`
    },
    plugins: [
        // addinng NuiAssetsPlugin
      new NuiAssetsPlugin()
    ],
    module: {
            loaders: [
                // adding json-loader
                {include: /\.json$/, loaders: ["json-loader"]}
            ]
   }
}
