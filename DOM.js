async function loadMergedData() {
    try {
    const response = await fetch("./mergedFlightsData.json");
    if (!response.ok) {
        throw new Error("Failed to retrieve JSON data.");
    };
    const data = await response.json();
    console.log(data);
    populateDropdown(data); // source: https://raddy.dev/blog/javascript-async-await-fetch-and-display-data-from-api/
    return data;
    }catch (error){
        console.log("Error loading data", error);
    };
}
loadMergedData();


window.onload = function(){
    document.getElementById("filterSourceAirportSelect").addEventListener("change", selectSourceAirport);
    }

/*
document.getElementById("filterDestinationAirportSelect").addEventListener("change", selectDestinationAirport);
document.getElementById("filterAirlineSelect").addEventListener("change", selectAirline);
document.getElementById("filterAircraftSelect").addEventListener("change", selectAircraft);
*/

function populateDropdown(data) {
    const sourceAirportSelect = document.getElementById("filterSourceAirportSelect");
    let airportSingleInstanceArr = []; 

    data.forEach(flight => {
        const airportName = flight.source_airport.name;
        if (!airportSingleInstanceArr.includes(airportName)) {
            airportSingleInstanceArr.push(airportName); 
            const option = document.createElement("option");
            option.value = airportName; 
            option.textContent = airportName; 
            sourceAirportSelect.appendChild(option); 
        }
    });
}

// was returning all instances
// fixed! by adding if clause in forEach https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/



function selectSourceAirport() {
    const selectSource = document.getElementById("filterSourceAirportSelect");
    const selectedAirport = selectSource.value;
    const airportInfoDisplay = document.getElementById("flightFilterDisplayDiv");
    airportInfoDisplay.textContent = `Flights from ${selectedAirport} to`
    document.getElementById("flightFilterDisplayDiv")
}



/*
function selectDestinationAirport() {

}

function selectAirline() {

}

function selectAircraft() {
    
}


/*
document.getElementById("filterSourceAirportSelect").addEventListener("click" selectSourceAirport);

function selectSourceAirport() {
    let option = document.createElement("option");
    let selectSource = document.getElementById("filterSourceAirportSelect");
}
*/


/*
async function loadFlightsData() {
    try {
    const response = await fetch("./mergedFlightsData.json");
    if (!response.ok) {
        throw new Error("Failed to retrieve JSON data.");
    };
    const data = await response.json();
    console.log(data);
    return data;
    }catch (error){
        console.log("Error loading data", error);
    };
}
loadFlightsData();
*/
