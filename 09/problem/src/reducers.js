import {combineReducers} from 'redux';
import locations from './modules/locations';

import {reducers as shellReducers} from '@concur/nui-shell';

export default combineReducers({locations, ...shellReducers});
