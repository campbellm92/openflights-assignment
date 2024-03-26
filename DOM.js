const {
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
} = require("./getFlightBy.js");
const {createRouteIdentifier, countFlightsByIATA, flightCountsObj} = require("./routeIdentifier.js");
const {flightCountsArr, averageRouteFrequency} = require("./calculatedRouteData.js");

document.getElementById("filterSourceAirportSelect").addEventListener("click" selectSourceAirport);

function selectSourceAirport() {
    let option = document.createElement("option");
    let selectSource = document.getElementById("filterSourceAirportSelect");
}