# NUI - first steps.

## Tasks
- make application to be served from http://localhost/nui/workshop
- intro to nui-config
- generate assets.json file with all assets created during the build

![](../images/07.gif)

## Steps

#### - install packages
```
cd nui-workshop-exercices
npm install --save @concur/nui-shell @concur/nui-config json-loader
```

####  - create src/config.js
- define baseUrl property with value=/nui/workshop

#### - modify src/server.js
 - fix to serve requests from baseUrl

#### - modify src/modules/locations.js
- change fetches  fetch from configured URL (baseUrl)

#### - modify webpack.config.babel.js
- add Nui assets plugin
- add publicPath to output of entry
- add json-loader to loaders


#### - modify static/index.html
 - serve js bundles from /nui/workshop

#### - start your browser and test
```
npm run dev
```

Open http://localhost:3000/nui/workshop/static

#### - setup and run nginx
[see instrictions](https://github.concur.com/nui/nui-docs/blob/master/intro/setting_up_your_dev_environment.md)

```
sudo nginx
```

now login to https://localhost (mlore@outtask.com/outtask), make sure you can see concur home page, and change your url
to https://localhost/nui/workshop/static,
When everything works - you should see /nui/workshop be a part of CTE.
