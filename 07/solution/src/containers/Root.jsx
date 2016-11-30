import React  from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

//importing Provider for react-redux
import {Provider} from 'react-redux';


import LocationsPage from './LocationsPage';
import LocationsList from './LocationsList';

// importing configureStore
import configureStore from '../configureStore';


// creating store by calling configureStore

let store = configureStore();

//wrap returning component to redux Provider
export default () => (

    <Provider store={store} key="provider">
        <Router history={hashHistory}>
            <Route path="/" component={LocationsPage}>
                <IndexRoute component={LocationsList} />
                <Route path="add" getComponent={(loc, cb) =>
                    {require.ensure([], require => {cb(null, require('./LocationForm').default)})}}  />
            </Route>
        </Router>
    </Provider>
)
