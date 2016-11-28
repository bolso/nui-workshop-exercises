
import React  from 'react';

import LocationPage from './LocationsPage';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import LocationsList from './LocationsList';

export default () => (
    <Router history={hashHistory}>
        <Route path="/" component={LocationPage}>
            <IndexRoute component={LocationsList} />
            <Route path="add" getComponent={(loc, cb) =>
                {require.ensure([], require => {cb(null, require('./LocationForm').default)})}}  />
        </Route>
    </Router>
)
