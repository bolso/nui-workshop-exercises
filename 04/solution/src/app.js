//import react locationsPage component from compoents/LocationPage
//and render it to div with id="root" using ReactDOM.render

import React  from 'react';
import ReactDOM from 'react-dom';

import LocationsPage from './components/LocationsPage';


ReactDOM.render(
    <LocationsPage/>,
    document.getElementById("root")
);
