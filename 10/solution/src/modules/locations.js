import {combineReducers} from 'redux';

const START_FETCH_LOCATIONS = "START_FETCH_LOCATIONS";
const DID_FETCH_LOCATIONS = "DID_FETCH_LOCATIONS";

const START_ADD_LOCATION = "START_ADD_LOCATION";
const DID_ADD_LOCATION = "DID_ADD_LOCATION";

const RESET_STATUS = "RESET_STATUS";

import config from '../config';

export const resetStatus= () => (dispatch, getState) => {
    dispatch({type: RESET_STATUS});
};

export const fetchLocations = () => (dispatch, getState) => {
    dispatch({type:START_FETCH_LOCATIONS});

    fetch(`${config.nui.baseUrl}/locations`).then((res) => res.json()).then((payload) => {
        dispatch({type:DID_FETCH_LOCATIONS, payload});
    })
};

export const addLocation = (location) => (dispatch, getState) => {

    dispatch({type:START_ADD_LOCATION});

    fetch(`${config.nui.baseUrl}/location`, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
    })
    .then((res) => res.json())
    .then(payload => dispatch({type: DID_ADD_LOCATION, payload}))
}

const data = (state = [], {type, payload}) => {
    switch (type) {
        case DID_FETCH_LOCATIONS:
            return [...payload];

        case DID_ADD_LOCATION:
            return [
                ...state,
                payload
            ]

        default:
            return state;
    }
}

const status = (state = 'idle', {type, payload}) => {
    switch (type) {
        case START_ADD_LOCATION:
            return 'adding';

        case DID_ADD_LOCATION:
            return 'added';

        case DID_FETCH_LOCATIONS:
            return 'fetched';

        case START_FETCH_LOCATIONS:
            return 'fetching';

        case RESET_STATUS:
            return 'idle';

        default:
            return state;
    }
}

export default combineReducers({data, status});
