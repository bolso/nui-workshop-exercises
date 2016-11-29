
import React  from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

//importing Provider for react-redux
...

import LocationPage from '../components/LocationsPage';
import LocationsList from '../components/LocationsList';

// importing configureStore
import configureStore from '../configureStore';


// creating store by calling configureStore
...

//wrap returning component to redux Provider
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
