'use strict';

function reachDestination(distance, speed) {
  let time = Math.round(((distance / speed)*2))/2;
  if(time === 1){
    return 'The train will be there in ' + time + ' hour.';
  } else if(time < 1){
    return 'The train will be there in ' + time + ' hours.';
  }
  return 'The train will be there in ' + time + ' hours.';
}
reachDestination();