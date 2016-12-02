import React  from 'react';

//importing FormattedMessage from @concur/nui-intl
import {FormattedMessage} from '@concur/nui-intl';

export default React.createClass({
    render() {

        let {addLocation} = this.props;

        return (
            <div>
                <FormattedMessage id="locations.fieldLabels.Country"/>:
                    <input type="text" ref="country" defaultValue="Germany"/>
                    {' '}
                <FormattedMessage id="locations.fieldLabels.City"/>:
                    <input type="text" defaultValue="Berlin" ref="city" />
                    {' '}
                <FormattedMessage id="locations.fieldLabels.numEmployees"/>:
                    <input type="number" defaultValue="1" ref="numEmployees" />
                    {' '}

                <button onClick={() => (
                    addLocation({
                        city: this.refs.city.value,
                        country: this.refs.country.value,
                        numEmployees: parseInt(this.refs.numEmployees.value)
                    })
                )}>
                    <FormattedMessage id="locations.buttons.Add" />
                </button>
            </div>
        )
    }
});
