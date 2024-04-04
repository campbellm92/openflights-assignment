const {
    getFlightBySourceAirport,
    getFlightByDestinationAirport,
    getFlightByCodeshare,
    getFlightByAirlineName,
    getFlightByAircraftType,
} = require("../getFlightBy.js")

const {mockAirportsArray, mockFlightsArray} = require("../mockData.js");
console.log(mockAirportsArray);
console.log(mockFlightsArray);



function mergeMockArrays(mockFlightsArray, mockAirportsArray) {
    return mockFlightsArray.map(flight => {
        const sourcePortInfo = mockAirportsArray.find(port => port.id === flight.source_airport_id);
        const destinationPortInfo = mockAirportsArray.find(port => port.id === flight.destination_airport_id);

        return {
            source_airport: {
                id: sourcePortInfo.id,
                name: sourcePortInfo.name,
                city: sourcePortInfo.city,
                country: sourcePortInfo.country,
                iata: sourcePortInfo.iata,
                latitude: sourcePortInfo.latitude,
                longitude: sourcePortInfo.longitude,
                timezone: sourcePortInfo.timezone
            },
            destination_airport: {
                id: destinationPortInfo.id,
                name: destinationPortInfo.name,
                city: destinationPortInfo.city,
                country: destinationPortInfo.country,
                iata: destinationPortInfo.iata,
                latitude: destinationPortInfo.latitude,
                longitude: destinationPortInfo.longitude,
                timezone: destinationPortInfo.timezone
            },
            
        }
    })
}
const mergedArray = mergeMockArrays(mockFlightsArray, mockAirportsArray);
console.log(mergedArray);


// test for getFlightBySourceAirport (IATA)
describe("Shows a list of flights given source IATA", () => {
    test("Show flight details for given source IATA", () => {
        const expectedResult = getFlightBySourceAirport(mergedArray, "ABC");
        expectedResult.forEach(flight => {
            expect(flight.source_airport.iata).toEqual("ABC");
        });
    });
});

// test for getFlightByDestinationAirport (IATA)

describe("Shows a list of flights given destination IATA", () => {
    test("Show flight details for given destination IATA", () => {
        const expectedResult = getFlightByDestinationAirport(mergedArray, "DEF");
        expectedResult.forEach(flight => {
            expect(flight.destination_airport.iata).toEqual("DEF");
        });
    });
});

//test for getFlightByCodeshare 

describe("Shows a list of flights by codeshare value", () => {
    test("Show flight details for flight by codeshare value", () => {
        const expectedResult = getFlightByCodeshare(mergedArray, "true");
        expectedResult.forEach(flight => {
            expect(flight.codeshare).toBeTruthy();
        });
    });
});


// test for getFlightByAirlineName

describe("Shows flights by airline name", () => {
    test("Show flight details for flight by airline name", () => {
        const expectedResult = getFlightByAirlineName(mergedArray, "QANTAS");
        expectedResult.forEach(flight => {
            expect(flight.airline.name).toEqual("QANTAS");
        });
    });
});
