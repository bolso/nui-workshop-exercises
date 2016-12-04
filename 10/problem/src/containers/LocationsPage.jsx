import React  from 'react';
import {connect} from 'react-redux';
import {fetchLocations} from '../modules/locations';
import LocationsPage from '../components/LocationsPage';

export default connect(() => ({}), {fetchLocations})(LocationsPage);
