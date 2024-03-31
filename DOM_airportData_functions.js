let airportsDataGlobal = [];
async function loadAirportsData() {
    try {
    const response = await fetch("./A2_Airports.json");
    if (!response.ok) {
        throw new Error("Failed to retrieve JSON data.");
    };
    const data = await response.json();
    console.log(data);
    airportsDataGlobal = data;
    populateDropdownAirportCity(data)
    return data;
    }catch (error){
        console.log("Error loading data", error);
    };
}
loadAirportsData();

function populateDropdownAirportCity(data) {
    const airportCitySelect = document.getElementById("filterCitySelect");
    let airportSingleInstanceArr = []; 

    data.forEach(airport => {
        const airportCityName = airport.city;
        if (!airportSingleInstanceArr.includes(airportCityName)) {
            airportSingleInstanceArr.push(airportCityName); 
            const option = document.createElement("option");
            option.value = airportCityName; 
            option.textContent = airportCityName; 
            airportCitySelect.appendChild(option); 
        }
    });
};


function selectAirportCity(){
    const selectCity = document.getElementById("filterCitySelect");
    const selectedCity = selectCity.value;
    const airportCityDisplay = document.getElementById("airportFilterDisplayDiv");
    airportCityDisplay.innerHTML = " ";

    const infoFromSelectedCity = airportsDataGlobal.filter(airport => airport.city === selectedCity);
    if (infoFromSelectedCity.length > 0) {
        infoFromSelectedCity.forEach(field => {
            const info = document.createElement("p");
            info.textContent = `ID: ${field.id}; Airport name: ${field.name}; IATA: ${field.iata}; 
            Latitude: ${field.latitude}; Longitude: ${field.longitude}; Timezone: ${field.timezone}`;
            airportCityDisplay.appendChild(info);
        });
    } else{
        airportCityDisplay.textContent = "No flights found for the selected city."
    }
    };
