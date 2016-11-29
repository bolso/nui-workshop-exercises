// rewrite as react compenet that fetches the data onComponentDidMount
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
