//mock arrays of airports and flights data:    
const mockAirportsArray = [
    {id: "1", name: "Airport 1", city: "City 1", country: "Country", iata: "ABC", 
    latitude: "123", longitude: "321", altitude: "10", timezone: "10"},
    {id: "2", name: "Airport 2", city: "City 2", country: "Country", iata: "DEF", 
    latitude: "456", longitude: "654", altitude: "11", timezone: "9"}
 ]
//console.log(mockAirportsArray);

const mockFlightsArray = [ 
    {airline: "AB", source_airport: "ABC", source_airport_id: "1", destination_airport: "DEF", 
    destination_airport_id: "2", codeshare: "true", aircraft: ["Plane"], airline_name: "QANTAS", airline_country: "Country"},
    {airline: "BC", source_airport: "DEF", source_airport_id: "2", destination_airport: "ABC", 
    destination_airport_id: "1", codeshare: "true", aircraft: ["Plane"], airline_name: "QANTAS", airline_country: "Country"}
]
//console.log(mockFlightsArray);

module.exports = {
    mockAirportsArray,
    mockFlightsArray
    };