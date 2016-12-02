import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import config from './config';

import {NuiPageContainer} from '@concur/nui-shell';

import LocationsPage from './containers/LocationsPage';
import LocationsList from './containers/LocationsList';
import App from './containers/App';


if (typeof require.ensure !== "function") require.ensure = function(d, c) {
    c(require)
};

export default (
    <Route component={App}>
        <Route path={`${config.nui.baseUrl}`} component={NuiPageContainer} >
            <Route  component={LocationsPage}>
                <IndexRoute isAnonymous component={LocationsList} />
                <Route path="add" getComponent={(loc, cb) =>
                    {require.ensure([], require => {cb(null, require('./containers/LocationForm').default)})}}  />
            </Route>
        </Route>
    </Route>
)
