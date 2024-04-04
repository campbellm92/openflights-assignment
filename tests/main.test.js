const {mergeDataSets} = require("../main.js");
const {mockAirportsArray, mockFlightsArray} = require("../mockData.js");
//console.log(mockAirportsArray);
//console.log(mockFlightsArray);

describe("Merges the two arrays into a new array of flights when id passed as argument", () => {
    
    test("Merge data", () => {
        const expectedResult = [
            {
                source_airport: {
                    id: "1",
                    name: "Airport 1",
                    city: "City 1",
                    country: "Country",
                    iata: "ABC",
                    latitude: "123",
                    longitude: "321",
                    timezone: "10"
            },
                destination_airport: {
                    id: "2",
                    name: "Airport 2",
                    city: "City 2",
                    country: "Country",
                    iata: "DEF",
                    latitude: "456",
                    longitude: "654",
                    timezone: "9"
            },
            codeshare: "true",
            aircraft: ["Plane"],
            airline: {
                code: "AB",
                name: "QANTAS",
                country: "Country"
            }
        },
        {      
                source_airport: {
                    id: "2",
                    name: "Airport 2",
                    city: "City 2",
                    country: "Country",
                    iata: "DEF",
                    latitude: "456",
                    longitude: "654",
                    timezone: "9"  
            },
                destination_airport: {
                    id: "1",
                    name: "Airport 1",
                    city: "City 1",
                    country: "Country",
                    iata: "ABC",
                    latitude: "123",
                    longitude: "321",
                    timezone: "10"  
            },
            codeshare: "true",
            aircraft: ["Plane"],
            airline: {
                code: "BC",
                name: "QANTAS",
                country: "Country"
        },
    }
];
    
    expect(mergeDataSets(mockFlightsArray, mockAirportsArray)).toEqual(expectedResult);

});
});

