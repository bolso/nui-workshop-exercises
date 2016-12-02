import React  from 'react';

// import FormattedMessage from @concur/nui-intl
...

export default React.createClass({
    render() {

        let {addLocation} = this.props;

        return (
            <div>
                {/*change to use FormattedMessage*/}
                Country:
                    <input type="text" ref="country" defaultValue="Germany"/>
                    {' '}
                {/*change to use FormattedMessage*/}
                City:
                    <input type="text" defaultValue="Berlin" ref="city" />
                    {' '}
                {/*change to use FormattedMessage*/}
                # of Employees:
                    <input type="number" defaultValue="1" ref="numEmployees" />
                    {' '}

                <button onClick={() => (
                    addLocation({
                        city: this.refs.city.value,
                        country: this.refs.country.value,
                        numEmployees: parseInt(this.refs.numEmployees.value)
                    })
                {/*change to use FormattedMessage*/}
                )}>Add</button>
            </div>
        )
    }
});
