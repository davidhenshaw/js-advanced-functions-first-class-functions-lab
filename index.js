// Code your solution in this file!
const returnFirstTwoDrivers = function (driverArr){
    return driverArr.slice(0,2);
}

const returnLastTwoDrivers = function(driverArr){
    return driverArr.slice(driverArr.length - 2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num)
{
    return (fare) => {return fare * num};
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArr, driverFunc){
    return driverFunc(driverArr);
}