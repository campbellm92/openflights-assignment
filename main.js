const fs = require("fs");
const airportsData = fs.readFileSync("A2_Airports.json", "utf8");
const flightsData = fs.readFileSync("A2_Flights.json", "utf8");
const airports = JSON.parse(airportsData);
const flights = JSON.parse(flightsData);


// merged dataset

const mergedFlightsData = flights.map(flight => {
    const sourceAirport = airports.find(airport => airport.iata === flight.source_airport);
    const destinationAirport = airports.find(airport => airport.iata === flight.destination_airport);

    return {
        ...flight,
        sourceAirport,
        destinationAirport
    }
});

console.log(mergedFlightsData);


//constructor
function Flight(source_airport_id, source_airport, destination_airport_id, destination_airport, iata) {
    this.source_airport_id = source_airport_id;
    this.source_airport = source_airport;
    this.destination_airport_id = destination_airport_id;
    this.destination_airport = destination_airport;
    this.iata = iata
}

mergedFlightsData.forEach(function(flights, airports) {
    const flight = new Flight(flights.source_airport_id, flights.source_airport, flights.destination_airport_id, flights.destination_airport, airports.iata);
    console.log(flight);
});

/* For the merged dataset I need:

- codeshare and aircraft properties as is --> flightsData

- include data from source_airport and destination_airport --> flightsData
--> can be done in two ways:
1) Create a new object for each property that is a copy of the airport data for the corresponding airport 
(including all properties that are in the airports JSON); 
or 2) Keep the airports as a separate array and make each property a reference to the corresponding airport in that array.

- include data of airlines in one of two ways:
1) Keep them as individual properties in the flight object: "airline", "airline_name" and "airline_country"; 
or 2) Create a single "airline" property that contains an airline object that has the code, name and origin country.

*/


/*
let mergedData = flightsData.map(flight => {
    let sourceAirport = airportsData.find(airport => airport.iata === flight.sourceAirportIATA);
    let destinationAirport = airportsData.find(airport => airport.iata === flight.destinationAirportIATA);

    return {
        ...flight, // Spread the original flight data
        source_airport: sourceAirport,
        destination_airport: destinationAirport
        // Include any additional transformations or data as needed
    };
});
*/