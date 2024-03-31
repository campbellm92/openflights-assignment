let routesDataGlobal = []

async function loadRoutesData() {
    try {
        const response = await fetch ("./routesData.json");
        if (!response.ok) {
            throw new Error("Failed to retrieve JSON data.");
        };
        const data = await response.json();
        console.log(data);
        calculateBusiestRoute(data);
        findTopTenBusiestRoutes(data);
        calculateRouteAverage(data);
        routesDataGlobal = data;
        return data
    }catch(error){
        console.log("Error loading data", error);
    }
}
loadRoutesData();



function calculateBusiestRoute(data){
    let routesArray = Object.values(data) // refer to func in calculatedRouteData.js
    routesArray.sort((a, b) => b.flights - a.flights);
    return routesArray[0];
};


function showBusiestRoute() {
    const busiestRoute = calculateBusiestRoute(routesDataGlobal);
    const infoField = document.getElementById("btnDisplayDiv");
    infoField.innerHTML = " ";
    infoField.textContent = `The busiest route is ${busiestRoute.source} to/from ${busiestRoute.destination} with ${busiestRoute.flights} flights;`
}

function findTopTenBusiestRoutes(data) {
    let routesArray = Object.values(data)
    routesArray.sort((a, b) => b.flights - a.flights);
    let topTen = routesArray.slice(0, 10);
    return topTen;
}


function showTopTenFlights() {
    const topTenRoutes = findTopTenBusiestRoutes(routesDataGlobal);
    const infoField = document.getElementById("btnDisplayDiv");
    infoField.innerHTML = " ";

    const title = document.createElement("p");
    title.textContent = "The top 10 busiest routes are:"
    infoField.appendChild(title);

    topTenRoutes.forEach(route => {
        const item = document.createElement("p");
        item.textContent = `${route.source} to/from ${route.destination} with ${route.flights} flights.`
        infoField.appendChild(item);
    })
};

function calculateRouteAverage(data) {
    let routesArray = Object.values(data)
    let sumForAverage = 0;
    for (let i = 0; i < routesArray.length; i++) {
        sumForAverage += routesArray[i].flights;
    };
    let average = Math.round(sumForAverage / routesArray.length)
    return average
}

function showRoutesAverage() {
    const routesAverage = calculateRouteAverage(routesDataGlobal);
    const infoField = document.getElementById("btnDisplayDiv");
    infoField.innerHTML = " ";
    infoField.textContent = `The average number of flights across all routes is ${routesAverage}.`
}
