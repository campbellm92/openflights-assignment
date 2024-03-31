const fs = require("fs");
const airportsData = fs.readFileSync("A2_Airports.json", "utf8");
const flightsData = fs.readFileSync("A2_Flights.json", "utf8");
const airports = JSON.parse(airportsData);
const flights = JSON.parse(flightsData);

// merge the datasets

function mergeDataSets(flights, airports) {
    return flights.map(flight => {
        const sourceAirportData = airports.find(airport => airport.id === flight.source_airport_id);
        const destinationAirportData = airports.find(airport => airport.id === flight.destination_airport_id);

        return {
            source_airport: {
                id: sourceAirportData.id,
                name: sourceAirportData.name,
                city: sourceAirportData.city,
                country: sourceAirportData.country,
                iata: sourceAirportData.iata,
                latitude: sourceAirportData.latitude,
                longitude: sourceAirportData.longitude,
                timezone: sourceAirportData.timezone
            },
            destination_airport: {
                id: destinationAirportData.id,
                name: destinationAirportData.name,
                city: destinationAirportData.city,
                country: destinationAirportData.country,
                iata: destinationAirportData.iata,
                latitude: destinationAirportData.latitude,
                longitude: destinationAirportData.longitude,
                timezone: destinationAirportData.timezone
            },
            codeshare: flight.codeshare,
            aircraft: flight.aircraft,
            airline: {
                code: flight.airline,  
                name: flight.airline_name,
                country: flight.airline_country
            }
        };
    });
};

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
function mapFlightData(mergedData) {
let flightNumCounter = 10001;  // add counter for flight number
return mergedData.map(data => {
    const flightNumber = flightNumCounter++;
    return {
    "Flight Number": flightNumber,
    ...data,
    "Timestamp": new Date().toISOString() // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
    }
});
};
const mergedFlightsDataMap = mapFlightData(mergedData);
//console.log(mergedFlightsDataMap);

const flightsJsonDataString = JSON.stringify(mergedFlightsDataMap, null, 2);
fs.writeFile("flightsDataMap.json", flightsJsonDataString, error => {
    if(error) {
        console.log("Error writing file.", error);
    } else {
        console.log("File written successfully.");
    }
});


module.exports = {
    mergedData,
    mergedFlightsDataMap
};


// function for counting amount of flights on a particular route
// Approach:
// count number by sourceID?
// make function to return array based on sourceID, then 
// 

/*
let routeCounter = 0;
function getTotalOfRoute(sourceID, destinationID) {
    flights.forEach(route => {
        if (flights.)
    }
}
(source airport && destination airport )++
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


/* 
had to change this b/c only returning flight details for the source airport
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
*/