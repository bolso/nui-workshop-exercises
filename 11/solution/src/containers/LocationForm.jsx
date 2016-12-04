import React  from 'react';
import {connect} from 'react-redux';
import {addLocation, cancelAddLocation} from '../modules/locations';
import LocationForm from '../components/LocationForm';

export default connect(({locations: {status}}) => (
    {status}), {addLocation, cancelAddLocation}
)(LocationForm);
