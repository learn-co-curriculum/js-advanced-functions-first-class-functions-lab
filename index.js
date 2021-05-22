let drivers;
function returnFirstTwoDrivers(drivers){
    const newDrivers = drivers.slice(0,2);
    return newDrivers;
}

function returnLastTwoDrivers(drivers){
    const newDrivers = drivers.slice(2);
    return newDrivers;
}

const selectingDrivers = [
    returnFirstTwoDrivers ,
    returnLastTwoDrivers
    ];

function createFareMultiplier(multiplier){
    return function(){return multiplier * multiplier};
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(drivers, select){
    const newDrivers = select(drivers);
    return newDrivers
}