// define constants for fetch locations and add location
const DID_FETCH_LOCATIONS = "DID_FETCH_LOCATIONS";
const ADD_LOCATION = "ADD_LOCATION";

// create fetchLocations function
export const fetchLocations = () => (dispatch, getState) => {

  fetch("/locations").then((res) => res.json()).then((payload) => {
      // dispatch DID_FETCH_LOCATIONS
    dispatch({type:DID_FETCH_LOCATIONS, payload});
  })
};

// create addLocation function
export const addLocation = (location) => (dispatch, getState) => {
    fetch("/location", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
    })
    .then((res) => res.json())
    .then(payload => dispatch({type: ADD_LOCATION, payload}))
}

export default function reducer(state = [], {type, payload}) {
    switch (type) {
        case DID_FETCH_LOCATIONS:
            return [...payload];

        case ADD_LOCATION:
            return [
                ...state,
                payload
            ]

        default:
            return state;
    }
}
