// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers){
    const twoMainDrivers = drivers.slice(0,2)
    return twoMainDrivers
}

function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = drivers.slice(2,4)
    return lastTwoDrivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


let createFareMultiplier = (multiply) =>  (fare) => {
    return fare * multiply;
    // console.log("first time calling this " + multiply)
    // console.log("Once asign we pass fare " + fare)
    // console.log("how many people on the bus " + people)
}
let fareDoubler = createFareMultiplier(2)
let fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(allDrivers,pickingDriver){
    return pickingDriver(allDrivers)
}

console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers))