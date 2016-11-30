import React  from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import LocationPage from '../components/LocationsPage';
import LocationsList from '../components/LocationsList';

export default () => (
    <Router history={hashHistory}>
        <Route path="/" component={LocationPage}>
            <IndexRoute component={LocationsList} />
            <Route path="add" getComponent={(loc, cb) =>
                {require.ensure([], require => {
                    cb(null, require('../components/LocationForm').default)})}}/>
        </Route>
    </Router>
)
