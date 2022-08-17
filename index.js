// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    if (location>42) {
        return location - 42;
    }else { 
        return 42 - location;
    } 
}

function distanceFromHqInFeet(feet) {
    const distanceFrom = distanceFromHqInBlocks(feet);
    return distanceFrom * 264;

}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        const distanceTravelled = destination -start;
        return distanceTravelled * 264;
    }else {
        const distanceTravelled = start -destination;
        return distanceTravelled * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start,destination);
    if (distanceTravelled < 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
        return 2.56;
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25;
    } else if (distanceTravelled > 2500) {
        return 'cannot travel that far'
    } 
}