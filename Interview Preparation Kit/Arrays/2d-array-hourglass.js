function hourglassSum(arr) {
  
  var sums = [];

  // define hourglass shaped structure to see where we need to count the values
  var hourGlass = [
    [1, 1, 1],
    [0, 1, 0],
    [1, 1, 1]
  ];

  // only 16 iterations is possible in a 6x6 matrix, because of the 3x3 size of the hourglass. 
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      
      var hourglassSum = 0; // reset the sum in every iteration

      for (var gi = 0; gi < hourGlass.length; gi++) {
        for (var gj = 0; gj < hourGlass.length; gj++) {
          if (hourGlass[gi][gj]) { // we only count where hourglass shape is present
            hourglassSum += arr[i + gi][j + gj];
          }
        }
      }
      sums.push(hourglassSum);
    }
  }

  return sums.reduce((a, b) => Math.max(a, b));
}


// Recursive solution

// let totals = [];
// let count = 0;
// let inCount;
// function hourGlass(array) {
//   if (count === 4) {
//     return;
//   }

//   const [a0, a1, a2] = array;
//   let tmp0 = Object.assign([], a0);
//   let tmp1 = Object.assign([], a1);
//   let tmp2 = Object.assign([], a2);

//   inCount = 0;
//   hourGlassInner(tmp0, tmp1, tmp2, inCount);

//   array.shift();

//   count++;
//   hourGlass(array);
// }
// function hourGlassInner(tmp0, tmp1, tmp2, inCount) {
//   if (inCount === 4) {
//     return;
//   }

//   let [e, r, t] = tmp0;
//   const top = e + r + t;
//   let [h, j] = tmp1;
//   let [o, p, l] = tmp2;
//   const bottom = o + p + l;
//   totals.push(top + j + bottom);
//   tmp0.shift();
//   tmp1.shift();
//   tmp2.shift();
//   inCount++;
//   hourGlassInner(tmp0, tmp1, tmp2, inCount);
// }
// hourGlass(arr);
// const max = Math.max(...totals);
// console.log(max);