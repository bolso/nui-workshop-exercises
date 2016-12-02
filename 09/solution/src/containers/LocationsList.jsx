import React  from 'react';
import {connect} from 'react-redux';
import LocationsList from '../components/LocationsList';

export default connect(({locations}) => ({locations}))(LocationsList);
