import path from "path";
import NuiAssetsPlugin from "@concur/nui-shell/lib/NuiAssetsWebpackPlugin";

// importing NuiLoggerPlugin and NuiConfigPlugin plugins
import NuiLoggerPlugin from "@concur/nui-logger/lib/NuiLoggerWebpackPlugin";
import NuiConfigPlugin from "@concur/nui-config/lib/NuiConfigWebpackPlugin";

import config from './src/config';


export default {
    entry : "./lib/app.js",
    output : {
        path: path.join(__dirname, "./dist"),
        // for bonus - adding [chunkhash] to filename
        filename: "bundle.[chunkhash].js",
        // for bonus - adding chunk file name
        chunkFilename: '[id].chunk.[chunkhash].js',
        // serving from baseUrl
        publicPath: `${config.nui.baseUrl}/dist/`
    },
    plugins: [
        //adding NuiConfigPlugin and NuiLoggerPlugin
        new NuiConfigPlugin(),
        new NuiLoggerPlugin(),
        new NuiAssetsPlugin()
    ],
    module: {
            loaders: [
                {include: /\.json$/, loaders: ["json-loader"]},
                // adding NuiConfig loader.
                {
                      test: [/\.jsx?$/, /\.json/, /\.js/],
                      loader: NuiConfigPlugin.cfgReplace()
                }
            ]
   }
}
