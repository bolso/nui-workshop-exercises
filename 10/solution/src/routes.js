import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import config from './config';

import {NuiPageContainer} from '@concur/nui-shell';

import LocationsPage from './containers/LocationsPage';
import App from './containers/App';

//importing SideBar
import sideBar from './components/SideBar';


if (typeof require.ensure !== "function") require.ensure = function(d, c) {
    c(require)
};

export default (
    <Route component={App}>
        <Route  component={NuiPageContainer} >
            {/* pass LocationsPage and sideBar */}
            {/* change to Route so edit form in modal is child route */}
            <Route path={`${config.nui.baseUrl}`} isAnonymous components={{content:LocationsPage, sideBar}}>
                <Route path="add" getComponent={(loc, cb) =>
                    {require.ensure([], require => {cb(null, require('./containers/LocationForm').default)})}}  />
                />
            </Route>
        </Route>
    </Route>
)
