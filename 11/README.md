# introducing rxJs


## Tasks
- modify code to use rxJDS fetch  based methods insted of low-level fetch
- implement fetch cancel for long running calls.

![](images/11.gif)



## Steps

#### - modify src/server.js
- add few sec delay into addLocation response


#### - modify src/components/LocationForm.jsx
- add cancel button calling cancelAddLocation
- display canceled status when cancelAddLocation fires

#### - modify src/modules/locations.jsx
- change  fetching to use createFetchActions
- add cancelFetch action for canceling adding locations
