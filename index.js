//Takes an array of names and grabs the first two indexes.
//New array is stored in variable.
const returnFirstTwoDrivers = function(names){
    const firstTwoNames = names.slice(0, 2);
    return firstTwoNames;
    }

//Takes an array of names and grabs the last two indexes.
//New array is stored in variable.
const returnLastTwoDrivers = function(names){
    const lastTwoNames = names.slice(-2);
    return lastTwoNames;
    }

//Initialize new array.
const selectingDrivers = [];
//First index stores the first two drivers.
selectingDrivers[0] = returnFirstTwoDrivers;
//Second index stores the last two drivers.
selectingDrivers[1] = returnLastTwoDrivers;

//Takes an integer, and returns a second function.
//Inner function takes a second value multiplied by the argument
//of the outer function.
function createFareMultiplier(multiplier){
    return function (fare) {
        return fare * multiplier;
    };
}

//Takes a number, passes it to the function returned from
//the createFareMultiplier. Fare is doubled.
function fareDoubler(fare){
    const double = createFareMultiplier(2);
    return double(fare);
}

//Takes a number, passes it to the function returned from
//the createFareMultiplier. Fare is tripled.
function fareTripler(fare){
    const triple = createFareMultiplier(3);
    return triple(fare);
}

//Takes an array of names and a function.
//Checks if function passed as the argument is the first two or
//last two drivers.
function selectDifferentDrivers (names, selection){
    if (selection === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(names);
    }
    else
        return returnLastTwoDrivers(names);
}
