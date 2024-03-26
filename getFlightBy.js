const {mergedData, mergedFlightsDataMap} = require("./main.js");


// function to get flights by their flight number
function getFlightByFlightNum(mergedFlightsDataMap, flightNum) {
    return mergedFlightsDataMap.find(getFlight => getFlight["Flight Number"] === flightNum)
    };
const flight = getFlightByFlightNum(mergedFlightsDataMap, 10600);
//console.log(flight);

// function for finding flight by source airport

function getFlightBySourceAirport(mergedFlightsDataMap, source) {
    let sourceAirportArr = [];
    for (let i = 0; i < mergedFlightsDataMap.length; i++) {
        let sourcePorts = mergedFlightsDataMap[i]; 
        if (sourcePorts.source_airport.iata === source) {
            sourceAirportArr.push(sourcePorts);
        }
    }
    return sourceAirportArr;
};
const sourceAirport = getFlightBySourceAirport(mergedFlightsDataMap, "ADL");
//console.log(sourceAirport);



// function for finding flight by destination airport

function getFlightByDestinationAirport(mergedFlightsDataMap, destination) {
    let destinationAirportArr = [];
    for (let i = 0; i < mergedFlightsDataMap.length; i++) {
        let destinationPorts = mergedFlightsDataMap[i]; 
        if (destinationPorts.destination_airport.iata === destination) {
            destinationAirportArr.push(destinationPorts);
        }
    }
    return destinationAirportArr;
};
const destinationAirport = getFlightByDestinationAirport(mergedFlightsDataMap, "BNE");
//console.log(destinationAirport);



// function for finding flight by codeshare

function getFlightByCodeshare(mergedFlightsDataMap, codeshareValue) {
    let codeshareArr = [];
    mergedFlightsDataMap.forEach(flight => {
        if (flight.codeshare === codeshareValue) {
            codeshareArr.push(flight)
        }
    });
        return codeshareArr
};
const flightByCodeshareValue = getFlightByCodeshare(mergedFlightsDataMap, false);
//console.log(flightByCodeshareValue); // returning empty array; update: use bracket notation instead of dot notation


// const codeshareFindTrue = mergedFlightsDataMap.find(flightCodeshare => flightCodeshare.codeshare)
// ^cumbersome



// function for finding flight by airline name

function getFlightByAirlineName(mergedFlightsDataMap, airlineName) {
    return mergedFlightsDataMap.filter(function(element) { // function taken as argument/ callback function
            return element.airline.name === airlineName;
    });
}
const flightsByAirlineName = getFlightByAirlineName(mergedFlightsDataMap, "Sharp Airlines")
//console.log(flightsByAirlineName);




// function for finding flight by aircraft type

function getFlightByAircraftType(mergedFlightsDataMap, aircraftType) {
    return mergedFlightsDataMap.filter(function (element){
        return element.aircraft.includes(aircraftType) // wasn't working with equality operator, changed to .includes
    });
}
const flightsByAircraft = getFlightByAircraftType(mergedFlightsDataMap, "Fairchild Swearingen Metroliner")
//console.log(flightsByAircraft);



module.exports = {
    getFlightByFlightNum,
    flight,
    getFlightBySourceAirport,
    sourceAirport,
    getFlightByDestinationAirport,
    destinationAirport, 
    getFlightByCodeshare,
    flightByCodeshareValue,
    getFlightByAirlineName,
    flightsByAirlineName,
    getFlightByAircraftType,
    flightsByAircraft
}