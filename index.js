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


function createFareMultiplier(fareprice) {
    return () => {
       return fareprice = fareprice * 4 + 5
    }
}

function fareDoubler(fareprice) {
    return fareprice = fareprice * 2
}

function fareTripler(fareprice) {
    return fareprice = fareprice * 3
}

function selectDifferentDrivers(allDrivers,pickingDriver){
    return pickingDriver(allDrivers)
}

console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers))