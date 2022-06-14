const hq = 42 

function distanceFromHqInBlocks(pickup) {
    if (pickup > hq) {
        return pickup - hq   
    } else if (pickup < hq) {
        return hq - pickup
    }
  }

  const feet = 264

  function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * feet

  }
// distanceFromHqInFeet;

  function distanceTravelledInFeet(start, destination) {
   if (start > destination) {
       return (start - destination)* 264;
    } else if (start < destination) {
       return (destination - start)* 264;
    }
}

// distanceTravelledInFeet;


   function calculatesFarePrice(start, destination){
    // distanceFromHqInFeet(start, destination);
    const distance = distanceTravelledInFeet(start, destination)
    
    if (distance <= 400){
        return 0;

    } else if (distance >= 401 && distance <= 2000){
        return (distance - 400)* 0.02;

    } else if(distance >= 2001 && distance <= 2500){
       return 25;

    } else{
       return "cannot travel that far";
    }
}

 // console.log(calculatesFarePrice(14, 250));

