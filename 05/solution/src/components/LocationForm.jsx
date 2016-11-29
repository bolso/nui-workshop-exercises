import React  from 'react';

export default React.createClass({
    render() {

        let {addLocation} = this.props;

        return (
            <div>
                Country:
                    <input type="text" ref="country" defaultValue="Germany"/>
                    {' '}
                City:
                    <input type="text" defaultValue="Berlin" ref="city" />
                    {' '}
                # of Employees:
                    <input type="number" defaultValue="1" ref="numEmployees" />
                    {' '}

                <button onClick={() => (
                    addLocation({
                        city: this.refs.city.value,
                        country: this.refs.country.value,
                        numEmployees: this.refs.numEmployees.value
                    })
                )}>Add</button>
            </div>
        )
    }
});
