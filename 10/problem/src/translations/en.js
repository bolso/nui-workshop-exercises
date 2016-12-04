module.exports = {
    locations: {
        title: "Locations",
        links: {
            "AddLocation": "Add Location",
            "LocationsList": "Locations"
        },
        buttons: {
            "Add": "Add",
            "Close": "Close",
            "Cancel": "Cancel"
        },
        fieldLabels: {
            "Country": "Country",
            "City": "City",
            "numEmployees": "Employees",
            "size": "Size"
        },
        _dynamic: {
            sizeCodes: {
                small: "Small",
                big: "Large"
            },
            status: {
                adding: "Adding Location, please wait...",
                added: "Location Added"
            }
        },
        totalEmployees: "As of {today} total number of employees is {total}",
        totalRent: "Assuming each location's monthly rent is {locationRent} => total rent: "
    }
}
