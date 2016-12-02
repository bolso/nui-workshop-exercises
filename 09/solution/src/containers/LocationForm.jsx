import React  from 'react';
import {connect} from 'react-redux';
import {addLocation} from '../modules/locations';
import LocationForm from '../components/LocationForm';

export default connect(() => ({}), {addLocation})(LocationForm);
