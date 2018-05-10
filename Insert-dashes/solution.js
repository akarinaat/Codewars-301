'use strict';

function insertDash(num) {
  let numArr = num.toString().split('');
  let result = '';
  for(let i = 0; i < numArr.length; i++){
    result += numArr[i];
    if (parseInt(numArr[i]) % 2 === 1 && parseInt(numArr[i+1]) % 2 === 1){
      result += '-';
    }

  }
  return result;
}

insertDash();