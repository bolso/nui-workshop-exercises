import React from 'react';
//importing FormattedMessage , FormattedNumber and from @concur/nui-intl
import {FormattedMessage, FormattedNumber} from '@concur/nui-intl';

export default ({country, city, numEmployees, formatter}) => {

    const sizeCode = numEmployees > 10 ? "big" : "small";

    return (
        <div>
            {/* changing to use FormattedMessage*/}
            <FormattedMessage id="locations.fieldLabels.Country" />:
                {country} {' '}
            {/* changing to use FormattedMessage*/}
            <FormattedMessage id="locations.fieldLabels.City" />:
                {city} {' '}
            {/* changing to use FormattedMessage*/}
            <FormattedMessage id="locations.fieldLabels.numEmployees" />:
                {/* changing to use FormattedNumber*/}
                <FormattedNumber value={numEmployees} /> {' '}
            {/* changing to use FormattedMessage*/}
            <FormattedMessage id="locations.fieldLabels.size" />:
                {/* using dynamic code for translating codes */}
                <FormattedMessage id={`locations._dynamic.sizeCodes.${sizeCode}`} />
        </div>
)};
