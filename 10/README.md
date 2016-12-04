# introducing NUI-Widgets


## Tasks
- Compile NUI-widgets playground
- Link  nui-widgetsplayground into our nui-workshop app (via external link)
- use Grid widget to present list of locations

![](images/10.gif)


## Steps

#### - install @concur/NUI-widgets
```
cd nui-workshop-exercises
npm install --save @concur/nui-widgets
```

#### - clone nui-widgets repo and run it
```
cd nui-workshop-exercises
git clone git@github.com:concur/nui-widgets
cd nui-widgets
npm install
npm run playground:build
npm run playground:start -- --port 3005
```

#### - login to http://localhost:3005 and see widgets playground pages

#### - create src/components/SideBar.jsx
- Move links for Locations List from src/components/LocationsPage.jsx
- Add links to http://localhost:3005 to see widgets playground


#### - Change src/Components/LocationsPage.jsx
- Move links for Locations List src/components/SideBar.jsx
- add Add Location Button
- import and render LocationList directly on this page

#### - change src/routes.js
- Pass LocationsPage and sideBar as components
- - change routes / is rendering LocationPage and /add it

#### - change src/components/LocationsList.jsx
- use Grid from nui-widgets
- use rendering logic from src/components/Location.hsx

#### - remove src/components/Location.jsx
- we do not need this component anymore becasue location detail is getting rendered as part of the grid in comonets/LocationList.jsx


#### modify src/modules/locations.js
- introduce and trak few more ACTIONS, such as
    * start fetching locations list
    * start adding location
    * * finish adding Location

#### - start the server and see everything in action
