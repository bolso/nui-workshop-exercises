import path from "path";
import NuiAssetsPlugin from "@concur/nui-shell/lib/NuiAssetsWebpackPlugin";

// importing NuiLoggerPlugin (@concur/nui-logger/lib/NuiLoggerWebpackPlugin)
...

// importing NuiConfigPlugin (@concur/nui-config/lib/NuiConfigWebpackPlugin)
...

import config from './src/config';


export default {
    entry : "./lib/app.js",
    output : {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: `${config.nui.baseUrl}/dist/`
    },
    plugins: [
      //add NuiLoggerPlugin and NuiConfigPlugin
      ...
      new NuiAssetsPlugin()

    ],
    module: {
            loaders: [
                {include: /\.json$/, loaders: ["json-loader"]},
                //add NuiConfigPlugin.cfgReplace to loaders:
                ...
            ]
   }
}
