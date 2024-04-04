// 28.03: having an issue whereby running anything from this file in the console deletes the json data
// change to load flightsDataMap:
const fs = require("fs");
const mappedData = fs.readFileSync("./flightsDataMap.json", "utf8");
const mappedFlightsData = JSON.parse(mappedData);

// function for displaying routes:
function createRouteIdentifier(flight) {
    let sourcePortName = flight.source_airport.name;
    let destinationPortName = flight.destination_airport.name;

    if (sourcePortName < destinationPortName) {
        return `${sourcePortName} to/from ${destinationPortName}`;
    }else {
        return `${destinationPortName} to/from ${sourcePortName}`;
    }
};

//console.log(createRouteIdentifier(mappedFlightsData));

// function for counting routes: 
function countRoutes(flights) { 
    let flightCounts = {};
    flights.forEach(flight => {
        const route = createRouteIdentifier(flight);
        if (!flightCounts[route]) { 
            flightCounts[route] = {
                source: flight.source_airport.name,
                destination: flight.destination_airport.name,
                flights: 0
            }; 
        }
        flightCounts[route].flights++; // increment outside of the else statement
    });
    return flightCounts;
}
const flightCountsObj = countRoutes(mappedFlightsData);
console.log(flightCountsObj); 



const routesJsonDataString = JSON.stringify(flightCountsObj, null, 2);
fs.writeFile("routesData.json", routesJsonDataString, error => {
    if(error) {
        console.log("Error writing file.", error);
    } else {
        console.log("File written successfully.");
    }
});



module.exports = {
    createRouteIdentifier,
    countRoutes,
    flightCountsObj
};






/*
function createRouteIdentifier(mappedFlightsData) {
    let sourceIATA = flight.source_airport.iata;
    let destinationIATA = flight.destination_airport.iata;

    if (sourceIATA < destinationIATA) {
        return sourceIATA + " - " + destinationIATA; 
    }else {
        return destinationIATA + " - " + sourceIATA;
    }
}
//console.log(createRouteIdentifier(flight);
*/





/*   returning NaN... 
function countFlightsByID(mergedFlightsDataMap) {
    let flightCounts = {};
    mergedFlightsDataMap.forEach(flight => {
        const route = createRouteIdentifier(flight)
        flightCounts[route] ++
    });
    return flightCounts;
}

const flightCountsArr = countFlightsByID(mergedFlightsDataMap);
console.log(flightCountsArr); 
*/







/* NOT WORKING
function createRouteIdentifier(sourceID, destinationID) {
    return sourceID["Source Airport ID"] + " - " + destinationID["Destination Airport ID"] + " - " 
    + destinationID["Destination Airport ID"] + " - " + sourceID["Source Airport ID"];
}

function countFlightsByID(mergedFlightsDataMap) {
    let flightCounts = {};
    mergedFlightsDataMap.forEach(flight => {
        const route = createRouteIdentifier(flight.sourceID, flight.destinationID)
        flightCounts[route] ++
    });
    return flightCounts;
}

const flightCountsArr = countFlightsByID(mergedFlightsDataMap);
console.log(flightCountsArr);
*/

