import React  from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {Provider} from 'react-redux';


import LocationsPage from './LocationsPage';
import LocationsList from './LocationsList';
import configureStore from '../configureStore';


let store = configureStore();

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
