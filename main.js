const fs = require("fs");
const airportsData = fs.readFileSync("A2_Airports.json", "utf8");
const flightsData = fs.readFileSync("A2_Flights.json", "utf8");
const airports = JSON.parse(airportsData);
const flights = JSON.parse(flightsData);

// merge the datasets
function mergeDataSets(flights, airports) {
    return flights.map(flight => {
        const idIsSame = airports.find(airport => airport.id === flight.source_airport_id);
        if (idIsSame) {
            return {
                ... flight,
                ... idIsSame
            }
        }
    });
}
const mergedData = mergeDataSets(flights, airports);
//console.log(mergedData);

// write new .json file of merged data
const mergedJsonDataString = JSON.stringify(mergedData, null, 2);
fs.writeFile("mergedFlightsData.json", mergedJsonDataString, error => {
    if(error) {
        console.log("Error writing file.", error);
    } else {
        console.log("File written successfully.");
    }
});


// mapping function 
// add counter for flight number
let flightNumCounter = 10001;
const mergedFlightsDataMap = mergedData.map(data => {
    const flightNumber = flightNumCounter++;
    return {
    "Flight Number": flightNumber,
    "Source Airport": data.source_airport,
    "Destination Airport": data.destination_airport,
    "Airline Name": data.airline_name,
    "Airline Country": data.airline_country,
    "Aircraft": data.aircraft,
    "Iata Code": data.iata,
    "Timezone": data.timezone,
    "Timestamp": new Date().getTime()
    }
});
//console.log(mergedFlightsDataMap);


module.exports = {
    mergedData,
    mergedFlightsDataMap
};



// create new file
/*
const jsonString = JSON.stringify(mergedFlightsData, null, 2);
fs.writeFile("mergedFlightsData.json", jsonString, error => {
    if(error) {
        console.log("Error writing file.", error);
    } else {
        console.log("File written successfully.");
    }
});
*/


/*
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
*/

/*

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

*/

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



/* existsSync for checking if file already exists hwen using writeFile

const fs = require('fs');
const path = 'path/to/yourfile.json';

// Check if the file already exists
if (fs.existsSync(path)) {
    console.log('The file already exists. Not overwriting.');
    // Optionally, append to the file or handle as needed
    // fs.appendFile(path, dataToAppend, (err) => { ... });
} else {
    // If the file doesn't exist, write the new file
    fs.writeFile(path, dataToWrite, (err) => {
        if (err) throw err;
        console.log('New file has been created.');
    });
}
*/ 







// merged dataset (Yaping)
/*
function mergeDataSets(flights, airports) {
    const mergedData = [];
    flights.forEach(flightID => {
        const sameIDS = airports.find(airportID => airportID.id === flightID.source_airport_id);
        if (sameIDS) {
            const mergedEntry = {...flightID, ...sameIDS};
            mergedData.push(mergedEntry);
        }
    });
    return mergedData;
}

const mergedData = mergeDataSets(flights, airports);
console.log(mergedData);
*/