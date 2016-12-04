import {combineReducers} from 'redux';

const START_FETCH_LOCATIONS = "START_FETCH_LOCATIONS";
const DID_FETCH_LOCATIONS = "DID_FETCH_LOCATIONS";

const START_ADD_LOCATION = "START_ADD_LOCATION";
const DID_ADD_LOCATION = "DID_ADD_LOCATION";

const RESET_STATUS = "RESET_STATUS";

export const resetStatus= () => (dispatch, getState) => {
    dispatch({type: RESET_STATUS});
};

// importing FetchActions
import {createFetchAction, createCancelFetchAction} from '@concur/nui-shell';

import config from '../config';



export const fetchLocations = () => (dispatch, getState) => {
    dispatch({type:START_FETCH_LOCATIONS});

    // using createFetchActions call
    dispatch(
        createFetchAction(DID_FETCH_LOCATIONS, `${config.nui.baseUrl}/locations`)()
    );
};


export const addLocation = (location) => (dispatch, getState) => {

    dispatch({type:START_ADD_LOCATION});

    // using createFetchActions call
    dispatch(
        createFetchAction(
            DID_ADD_LOCATION,
            `${config.nui.baseUrl}/location`,
            {
                method:"POST",
                body:JSON.stringify(location)
            }
        )());
}

export const cancelAddLocation = () => (dispatch, getState) => {
    dispatch(createCancelFetchAction(DID_ADD_LOCATION,
        `${config.nui.baseUrl}/locacation`)());
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

        case 'DID_ADD_LOCATION_CANCEL':
            return 'cancelled';

        default:
            return state;
    }
}

export default combineReducers({data, status});
