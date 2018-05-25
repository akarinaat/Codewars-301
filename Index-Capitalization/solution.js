var capitalize = function(string, array) {
  let arr = string.split('');
  for (i = 0; i < array.length; i++) {
    if (array[i] > arr.length) {
      continue;
    }
    let string = '' + arr[array[i]];
    arr.splice(array[i], 1, string.toUpperCase());
  }
  return arr.join('');
};
