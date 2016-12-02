import path from "path";
import NuiAssetsPlugin from "@concur/nui-shell/lib/NuiAssetsWebpackPlugin";
import NuiLoggerPlugin from "@concur/nui-logger/lib/NuiLoggerWebpackPlugin";
import NuiConfigPlugin from "@concur/nui-config/lib/NuiConfigWebpackPlugin";

// import @concur/nui-intl plugins
import IntlWebpackPlugin from "@concur/nui-intl/lib/IntlWebpackPlugin";

import config from './src/config';


export default {
    entry : "./lib/app.js",
    output : {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.[chunkhash].js",
        chunkFilename: '[id].chunk.[chunkhash].js',
        publicPath: `${config.nui.baseUrl}/dist/`
    },
    plugins: [
        new NuiConfigPlugin(),
        new NuiLoggerPlugin(),
        new NuiAssetsPlugin(),

        // add NUiIntlPligin
        ...
    ],
    module: {
            loaders: [
                {include: /\.json$/, loaders: ["json-loader"]},
                {
                      test: [/\.jsx?$/, /\.json/, /\.js/],
                      loader: NuiConfigPlugin.cfgReplace()
                },
                //add NuiIntl loader
                {
                    test: [/\.jsx?$/, /\.json/, /\.js/],
                    loader: IntlWebpackPlugin.intlReplace()
                }

            ]
   }
}
