// delete this file.
//move redering location to use nui-widgets grid in src/components/LocationsList.js

import React from 'react';
import {FormattedMessage, FormattedNumber} from '@concur/nui-intl';

export default ({country, city, numEmployees, formatter}) => {

    const sizeCode = numEmployees > 10 ? "big" : "small";

    return (
        <div>
            <FormattedMessage id="locations.fieldLabels.Country" />:
                {country} {' '}
            <FormattedMessage id="locations.fieldLabels.City" />:
                {city} {' '}
            <FormattedMessage id="locations.fieldLabels.numEmployees" />:
                <FormattedNumber value={numEmployees} /> {' '}
            <FormattedMessage id="locations.fieldLabels.size" />:
                <FormattedMessage id={`locations._dynamic.sizeCodes.${sizeCode}`} />
        </div>
)};
