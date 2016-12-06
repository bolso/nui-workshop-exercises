// rewrite as react compenent that fetches the data onComponentDidMount
// and stores locations in the state

// component should render list of locations and use Location component to
//render individual location

// component should render LocationForm component to handle adding locations

export default () => {
    fetch("/locations").then((res) => res.json()).then((locations) => {
        document.getElementById("root").innerHTML = `
        <ul>
            ${locations.map(l => `<li>${l.country}/${l.city}</li>`)
                .join('')}
        </ul>`;
    });
}
/*
export default React.createClass({
    getInitialState() {
        // set inital state (empty location array
        ....
    },

    componentDidMount() {
        //implement fetch location
       ...
    },

    addLocation(location) {
        // implement addLocation
        fetch("/location", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        }).then((res) => res.json())
        .then(location =>

            // put location in state

    },

    render() {

        // get locations from state
        return (
            <div>
                 {/* render locationList*/}
                    ...
                 {/* render locationForm*/}
                 ...
            </div>
        )
   }

})
*/
