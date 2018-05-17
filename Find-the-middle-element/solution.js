'use strict';

var gimme = function (inputArray) {

  let clone = inputArray.slice();
  clone.sort((a, b) => a - b);
  let returnVal = inputArray.indexOf(clone[1]);
  return returnVal;

};

