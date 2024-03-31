// sort:
// https://www.w3schools.com/js/js_array_sort.asp

//31.03: nothing working here. removes values in flightsDataMap.json when logged in console


const {mergedData, mergedFlightsDataMap} = require("./main.js");
const {createRouteIdentifier, countFlightsByID, flightCountsObj} = require("./routeIdentifier.js");

const flightCountsArr = Object.values(flightCountsObj);
//console.log(flightCountsArr);

// find busiest route
function findBusiestRoute(flightCountsArr) {
    let maxValue = 0;
    flightCountsArr.forEach((element) => {
        maxValue = Math.max(maxValue, element);
    });
    return maxValue;
}
const busiestRoute = findBusiestRoute(flightCountsArr);
console.log(busiestRoute);

//console.log(maxValue);
// https://www.shecodes.io/athena?tag=Math.max%28%29+method#:~:text=In%20order%20to%20use%20the,to%20find%20into%20an%20array.
// got rid of 'value' bc not in object


// find average number of flights across all routes
let sumForAverage = 0;
for (let i = 0; i < flightCountsArr.length; i++) {
    sumForAverage += flightCountsArr[i];
}
const averageRouteFrequency = Math.round(sumForAverage / flightCountsArr.length);
//console.log(averageRouteFrequency);

// still need top 10 :

function getTopTen(flightCountsArr) {
    let data = [... flightCountsArr];
    data.sort(function(a,b) {return b - a;});
    let topTen = data.slice(0,9)
    return topTen
}
console.log(getTopTen(flightCountsArr));


module.exports = {
    flightCountsArr,
    averageRouteFrequency
}


/*  NOT WORKING
//const busiestRoutes = flightCountsArr.reduce((a, b) => Math.max(a,b), -Infinity);
//console.log(busiestRoutes);
*/


/* JUST RETURNING 0
// find least busy route
let minValue = 0;
const leastBusyRoutes = Object.values(flightCountsObj);
leastBusyRoutes.forEach((element) => {
    minValue = Math.min(minValue, element);
});
console.log(minValue);
*/ 

