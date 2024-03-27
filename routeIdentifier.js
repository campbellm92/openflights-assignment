const {mergedData, mergedFlightsDataMap} = require("./main.js");

/*
function createRouteIdentifier(flight) {
    let sourceIATA = flight.source_airport.iata;
    let destinationIATA = flight.destination_airport.iata;

    if (sourceIATA < destinationIATA) {
        return sourceIATA + " - " + destinationIATA; 
    }else {
        return destinationIATA + " - " + sourceIATA;
    }
}
*/
// not working:
function createRouteIdentifier(flight) {
    let sourceIATA = flight.source_airport.iata;
    let destinationIATA = flight.destination_airport.iata;

    if (sourceIATA < destinationIATA) {
        return {
            "Flight route": `${flight.source_airport.city} to ${flight.destination_airport.city}`,
            "Source Airport ID": `${flight.source_airport.id}`,
            "Destination Airport ID": `${flight.destination_airport.id}`,
            "Route IATA Codes": sourceIATA + " - " + destinationIATA
        };
        
    }else {
        return {
        "Flight route": `${flight.source_airport.city} to ${flight.destination_airport.city}`,
        "Source Airport ID": `${flight.source_airport.id}`,
        "Destination Airport ID": `${flight.destination_airport.id}`,
        "Route IATA Codes": destinationIATA + " - " + sourceIATA
        };
    }
}

function countFlightsByIATA(mergedFlightsDataMap) { // need to rename as iata
    let flightCounts = {};
    mergedFlightsDataMap.forEach(flight => {
        const route = createRouteIdentifier(flight);
        if (!flightCounts[route]) { // add if clause to handle potential of pair not existing
            flightCounts[route] = 0;
        }
        flightCounts[route]++; // increment outside of the if statement
    });
    return flightCounts;
}
const flightCountsObj = countFlightsByIATA(mergedFlightsDataMap);
console.log(flightCountsObj); 


module.exports = {
    createRouteIdentifier,
    countFlightsByIATA,
    flightCountsObj
};


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

