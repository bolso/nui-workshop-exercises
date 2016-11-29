// define constants for fetch locations and add location
const DID_FETCH_LOCATIONS = ...
const ADD_LOCATION =  ...

// create fetchLocations function
export const fetchLocations = () => (dispatch, getState) => {

    fetch("/locations")
    .then((res) => res.json())
    // dispatch DID_FETCH_LOCATIONS
    .then((payload) => {
        dispatch({type:DID_FETCH_LOCATIONS, payload});
    })
};

// create addLocation function
export const addLocation = (location) => (dispatch, getState) => {

    // call fetch (method POST to /location
    ...

    .then((res) => res.json())
    /// dispatch
    .then(payload => dispatch({type:DID_FETCH_LOCATIONS, payload}))
}

//create locations reducer
export default function reducer(state = [], {type, payload}) {
  switch(type){

      // define case for DID_FETCH_LOCATIONS
      ...

      // define case for ADD_LOCATION
      ...

    default:
      return state;
  }
}
