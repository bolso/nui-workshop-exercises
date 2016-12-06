import React  from 'react';

export default React.createClass({
    render() {

        // get addLocation from props

        return (
            <div>
                Country:
                    <input type="text" ref="country" defaultValue="Germany"/>
                    {' '}

                {/* add fields for City and numEmployees */}
                <button onClick={() => (

                    {/* call addLocation fn */}
                )}>Add</button>
            </div>
        )
    }
});
