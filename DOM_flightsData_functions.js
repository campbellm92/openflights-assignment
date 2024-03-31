let mergedDataGlobal = []; // not sure how to access this data any other way
async function loadMergedData() {
    try {
    const response = await fetch("./mergedFlightsData.json");
    if (!response.ok) {
        throw new Error("Failed to retrieve JSON data.");
    };
    const data = await response.json();
    console.log(data);
    populateSourceDropdown(data); // source: https://raddy.dev/blog/javascript-async-await-fetch-and-display-data-from-api/
    populateDestinationDropdown(data)
    populateAirlineDropdown(data)
    populateAircraftDropdown(data)
    mergedDataGlobal = data;
    return data;
    }catch (error){
        console.log("Error loading data", error);
    };
}
loadMergedData();


window.onload = function(){ // source: codeplay21
    document.getElementById("filterSourceAirportSelect").addEventListener("change", selectSourceAirport);
    document.getElementById("filterDestinationAirportSelect").addEventListener("change", selectDestinationAirport);
    document.getElementById("filterAirlineSelect").addEventListener("change", selectAirline);
    document.getElementById("filterAircraftSelect").addEventListener("change", selectAircraft);
    document.getElementById("filterCitySelect").addEventListener("change", selectAirportCity);
    document.getElementById("busiestRouteBtn").addEventListener("click", showBusiestRoute);
    document.getElementById("topTenBtn").addEventListener("click", showTopTenFlights);
    document.getElementById("averageFlightsBtn").addEventListener("click", showRoutesAverage);
    };

// functions for source airport dropdown & displaying selected info
function populateSourceDropdown(data) {
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
};
// was returning all instances
// fixed! by adding if clause in forEach https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/

function selectSourceAirport() {
    const selectSource = document.getElementById("filterSourceAirportSelect");
    const selectedAirport = selectSource.value;
    const airportInfoDisplay = document.getElementById("flightFilterDisplayDiv");
    airportInfoDisplay.innerHTML = " " // sources below 
    // set dropdowns to their defaults
    document.getElementById("filterDestinationAirportSelect").selectedIndex = 0;
    document.getElementById("filterAirlineSelect").selectedIndex = 0; 
    document.getElementById("filterAircraftSelect").selectedIndex = 0;

    const infoFromSelectedAirport = mergedDataGlobal.filter(flight => flight.source_airport.name === selectedAirport);
        if (infoFromSelectedAirport.length > 0) {
            infoFromSelectedAirport.forEach(flight => {
            const info = document.createElement("p");
            info.textContent = `Destination: ${flight.destination_airport.name}; Airline: ${flight.airline.name}; Aircraft: ${flight.aircraft}`;
            airportInfoDisplay.appendChild(info);
        })
    }else {
        airportInfoDisplay.textContent = "No flights found for the selected source airport."
    };
        };

 // clearing the content sources:
 //https://www.tutorialspoint.com/how-to-clear-the-content-of-a-div-using-javascript#:~:text=Using%20the%20innerHTML%20Property&text=When%20we%20assign%20an%20empty,element%2C%20including%20the%20div%20element.       
 //https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
  

 // functions for destination airport dropdown & displaying selected info
 function populateDestinationDropdown(data) {
    const destinationAirportSelect = document.getElementById("filterDestinationAirportSelect");
    let airportSingleInstanceArr = []; 

    data.forEach(flight => {
        const airportName = flight.source_airport.name;
        if (!airportSingleInstanceArr.includes(airportName)) {
            airportSingleInstanceArr.push(airportName); 
            const option = document.createElement("option");
            option.value = airportName; 
            option.textContent = airportName; 
            destinationAirportSelect.appendChild(option); 
        }
    });
 };

function selectDestinationAirport() {
    const selectDestination = document.getElementById("filterDestinationAirportSelect");
    const selectedAirport = selectDestination.value;
    const airportInfoDisplay = document.getElementById("flightFilterDisplayDiv");
    airportInfoDisplay.innerHTML = " " 

    document.getElementById("filterSourceAirportSelect").selectedIndex = 0;
    document.getElementById("filterAirlineSelect").selectedIndex = 0; 
    document.getElementById("filterAircraftSelect").selectedIndex = 0;

    const infoFromSelectedAirport = mergedDataGlobal.filter(flight => flight.destination_airport.name === selectedAirport);
        if (infoFromSelectedAirport.length > 0) {
            infoFromSelectedAirport.forEach(flight => {
            const info = document.createElement("p");
            info.textContent = `Source: ${flight.source_airport.name}; Airline: ${flight.airline.name}; Aircraft: ${flight.aircraft}`;
            airportInfoDisplay.appendChild(info);
        })
    }else {
        airportInfoDisplay.textContent = "No flights found for the selected destination airport."
    };
        };
//source for selectedIndex (making it so that the other dropdowns go back to default when interacting with diff dropdown):
// https://stackoverflow.com/questions/49588862/how-to-reset-values-of-select-dropdown

// functions for airline dropdown & displaying selected info
function populateAirlineDropdown(data) {
    const airlineSelect = document.getElementById("filterAirlineSelect");
    let airlineSingleInstanceArr = []; 

    data.forEach(flight => {
        const airlineName = flight.airline.name;
        if (!airlineSingleInstanceArr.includes(airlineName)) {
            airlineSingleInstanceArr.push(airlineName); 
            const option = document.createElement("option");
            option.value = airlineName; 
            option.textContent = airlineName; 
            airlineSelect.appendChild(option); 
        }
    });
 };

function selectAirline() {
    const selectAirline = document.getElementById("filterAirlineSelect");
    const selectedAirline = selectAirline.value;
    const airlineInfoDisplay = document.getElementById("flightFilterDisplayDiv");
    airlineInfoDisplay.innerHTML = " " 

    document.getElementById("filterSourceAirportSelect").selectedIndex = 0;
    document.getElementById("filterDestinationAirportSelect").selectedIndex = 0;
    document.getElementById("filterAircraftSelect").selectedIndex = 0;

    const infoFromSelectedAirline = mergedDataGlobal.filter(flight => flight.airline.name === selectedAirline);
        if (infoFromSelectedAirline.length > 0) {
            infoFromSelectedAirline.forEach(flight => {
            const info = document.createElement("p");
            info.textContent = `Source: ${flight.source_airport.name}; Destination: ${flight.destination_airport.name}; Aircraft: ${flight.aircraft}`;
            airlineInfoDisplay.appendChild(info);
        })
    }else {
        airportInfoDisplay.textContent = "No flights found for the selected airline."
    };
        };


// functions for aircraft dropdown & displaying selected info
function populateAircraftDropdown(data) {
    const aircraftSelect = document.getElementById("filterAircraftSelect");
    let aircraftSingleInstanceArr = []; 

    data.forEach(flight => {
        flight.aircraft.forEach(aircraftName => {  // need to iterate through b/c array
            if (!aircraftSingleInstanceArr.includes(aircraftName)) {
                aircraftSingleInstanceArr.push(aircraftName);
                const option = document.createElement("option");
                option.value = aircraftName;
                option.textContent = aircraftName;
                aircraftSelect.appendChild(option);
            }
        });
    });
}

function selectAircraft() {
    const selectAircraft = document.getElementById("filterAircraftSelect");
    const selectedAircraft = selectAircraft.value;
    const aircraftInfoDisplay = document.getElementById("flightFilterDisplayDiv");
    aircraftInfoDisplay.innerHTML = " " 

    document.getElementById("filterSourceAirportSelect").selectedIndex = 0;
    document.getElementById("filterDestinationAirportSelect").selectedIndex = 0;
    document.getElementById("filterAirlineSelect").selectedIndex = 0;

    const infoFromSelectedAircraft = mergedDataGlobal.filter(flight => flight.aircraft.includes(selectedAircraft)); // wasn't working b/c this field is an array 
        if (infoFromSelectedAircraft.length > 0) {
            infoFromSelectedAircraft.forEach(flight => {
            const info = document.createElement("p");
            info.textContent = `Source: ${flight.source_airport.name}; Destination: ${flight.destination_airport.name}; Airline: ${flight.airline.name}`;
            aircraftInfoDisplay.appendChild(info);
        })
    }else {
        airportInfoDisplay.textContent = "No flights found for the selected aircraft."
    };
        }




        
        
        /*        
function selectAircraft() {
    
}


// another source: https://www.youtube.com/watch?v=VmQ6dHvnKIM (DAVE GRAY)

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




/*
    function selectSourceAirport() {
        const selectSource = document.getElementById("filterSourceAirportSelect");
        const selectedAirport = selectSource.value;
        const airportInfoDisplay = document.getElementById("flightFilterDisplayDiv");
        const infoFromSelectedAirport = mergedDataGlobal.filter(flight => flight.source_airport.name === selectedAirport);
            if (infoFromSelectedAirport.length > 0) {
                const list = document.createElement("ul");
                infoFromSelectedAirport.forEach(flight => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `Destination: ${flight.destination_airport.name}`;
                    list.appendChild(listItem);
                });
               airportInfoDisplay.appendChild(list);
            }
        };
    
*/