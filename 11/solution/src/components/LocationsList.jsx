import React  from 'react';

import {withFormatter, FormattedMessage, FormattedCurrency} from '@concur/nui-intl';

import {Button} from '@concur/nui-widgets';

import {browserHistory} from 'react-router';
import config from '../config';

import {Grid} from '@concur/nui-widgets';


export default withFormatter(({locations, formatter}) => {
    const today = formatter.formattedDate({value: new Date()});
    const totalEmployees = formatter.formattedNumber({
        value:  locations.reduce((sum, location) => (location.numEmployees + sum), 0)
    });

    const locationRent = 100;
    const totalRent = locationRent * locations.length;

    return (
        <div>


            {/* changed to use Grid from nui-widgets */}
            <Grid.Table
                datasource={locations}
                indexKey={['id']}
                isCheckBoxOn
                isSearchOn
                pageSize={6}
                styleNames={{alternateRow: 'reporttable-row-alternate'}}>

                    <Grid.Column
                        dataIndex='country'
                        header={formatter.formattedMessage({id: "locations.fieldLabels.Country"})}
                        searchable sortable />

                    <Grid.Column
                        dataIndex='city'
                        header={formatter.formattedMessage({id: "locations.fieldLabels.City"})}
                        searchable sortable/>

                    <Grid.Column
                        dataIndex='numEmployees'
                        header={formatter.formattedMessage({id: "locations.fieldLabels.numEmployees"})}
                        renderer={(column, location) => {
                            return formatter.formattedNumber({value: location.numEmployees})
                        }}
                        sortable />

                    <Grid.Column
                        header={formatter.formattedMessage({id: "locations.fieldLabels.size"})}
                        renderer={(column, location) => {
                            const sizeCode = location.numEmployees > 10 ? "big" : "small";
                            return formatter.formattedMessage({id: `locations._dynamic.sizeCodes.${sizeCode}`})
                        }}
                        sortable = {false}/>

            </Grid.Table>
            <p />


            <FormattedMessage id="locations.totalEmployees"
                values={{today, total: totalEmployees}} />
             <br />

             <FormattedMessage id="locations.totalRent"
                    values={{locationRent:
                        formatter.formattedCurrency({value: locationRent, currency: 'EUR'})
                    }} />:

            <FormattedCurrency value={totalRent} currency='EUR' />

    </div>

)});
