import {combineReducers} from 'redux';
import locations from './modules/locations';

//importing reducers
import {reducers as shellReducers} from '@concur/nui-shell';

// using in nui-shell
export default combineReducers({locations, ...shellReducers});
