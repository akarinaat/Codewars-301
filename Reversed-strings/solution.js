'use strict';

function solution(str){
  let arr = str.split('');
  console.log(arr);
  let resultArray = [];
  for (var i = 0; i < arr.length; i++){
    resultArray.unshift(arr[i]);
  }
  return resultArray.join('');
}