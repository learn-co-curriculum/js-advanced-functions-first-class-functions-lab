// Code your solution in this file
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers() {
    return(drivers.slice(0, 2))
    
}
function returnLastTwoDrivers() {
    return(drivers.slice(2, 4))
    
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
    function fareMultiplier(value) {
        value = 12.5
        return(value * 2)
    }
    return(fareMultiplier)
}

function fareDoubler(fare) {
    return(fare * 2)
}
function fareTripler(fareX3) {
    return(fareX3 * 3)
}

function selectDifferentDrivers(drivers, selectingDrivers) {
    return(selectingDrivers())
}