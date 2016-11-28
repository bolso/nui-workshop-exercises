//import react locationsList component from compoents/LocationList
//and render it to div with id="val" using ReactDOM.render

import React  from 'react';
import ReactDOM from 'react-dom';

import LocationsPage from './components/LocationsPage';

ReactDOM.render(
    <LocationsPage/>,
    document.getElementById("val")
);
