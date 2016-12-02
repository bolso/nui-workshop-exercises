module.exports = {
    locations: {
        links: {
            "AddLocation": "Add Location",
            "LocationsList": "Locations"
        },
        buttons: {
            // add translations for Add
            ...
        },
        _dynamic: {
            sizeCodes: {
                //define codes for small and large

        // add labels for country, city , # of employees
        ...
        // add translations for totalEmployees and totalRent
        totalEmployees: "As of {today} total number of employees is {total}",
        totalRent: "Assuming each location's monthly rent is {locationRent}  => total rent: "
    }
}
