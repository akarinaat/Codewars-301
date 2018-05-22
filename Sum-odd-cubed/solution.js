function cubeOdd(arr) {
  for (var i = 0; i < arr.length; i++){
    if(typeof(i) !== 'number'){
      return undefined;
    }

    else {
      let filterArr = arr.filter(elem => elem % 2 === 1);
      console.log(filterArr);
      let mapArr = filterArr.map(elem => Math.pow (elem, 3));
      console.log(mapArr);
      let reduceArr = mapArr.reduce((acc,cur) => acc + cur, 0);
      return reduceArr;
    }
  }
}
