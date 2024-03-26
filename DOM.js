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
/*
document.getElementById("filterSourceAirportSelect").addEventListener("change", selectSourceAirport);
document.getElementById("filterDestinationAirportSelect").addEventListener("change", selectDestinationAirport);
document.getElementById("filterAirlineSelect").addEventListener("change", selectAirline);
document.getElementById("filterAircraftSelect").addEventListener("change", selectAircraft);
*/

function populateDropdown(data) {
    const sourceAirportSelect = document.getElementById("filterSourceAirportSelect");
    data.forEach(flight => {
        const option = document.createElement("option");
        option.value = flight.source_airport.name;
        option.textContent = flight.source_airport.name;
        sourceAirportSelect.appendChild(option);
    })
}
populateDropdown();
// 26.03: returning all instances!




/*
function selectSourceAirport() {

}

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






/* MAY NOT NEED ANYMORE
async function loadAirportsData() {
    try {
    const response = await fetch("./A2_Airports.json");
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
loadAirportsData();
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
