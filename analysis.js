const {mergedData, mergedFlightsDataMap} = require("./main.js");


// function to get flights by their flight number
function getFlightByFlightNum(mergedFlightsDataMap, flightNum) {
    return mergedFlightsDataMap.find(getFlight => getFlight["Flight Number"] === flightNum)
    };
const flight = getFlightByFlightNum(mergedFlightsDataMap, 10600);
console.log(flight);

// function for finding flight by source airport

function getFlightBySourceAirport(mergedFlightsDataMap, source) {
    let sourceAirportArr = [];
    for (let i = 0; i < mergedFlightsDataMap.length; i++) {
        let sourcePorts = mergedFlightsDataMap[i]; 
        if (sourcePorts["Source Airport"] === source) {
            sourceAirportArr.push(sourcePorts);
        }
    }
    return sourceAirportArr;
};
const sourceAirport = getFlightBySourceAirport(mergedFlightsDataMap, "ADL");
console.log(sourceAirport);



// function for finding flight by destination airport

function getFlightByDestinationAirport(mergedFlightsDataMap, destination) {
    let destinationAirportArr = [];
    for (let i = 0; i < mergedFlightsDataMap.length; i++) {
        let destinationPorts = mergedFlightsDataMap[i]; 
        if (destinationPorts["Destination Airport"] === destination) {
            destinationAirportArr.push(destinationPorts);
        }
    }
    return destinationAirportArr;
};
const destinationAirport = getFlightByDestinationAirport(mergedFlightsDataMap, "BNE");
console.log(destinationAirport);


// function for finding flight by codeshare




// function for finding flight by airline name


