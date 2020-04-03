// the optimal solution simply sorts the numbers and subtracts each element from the previous one. There's no need to create the arrays as the description suggests because the minimum difference will be calculated by 2 neighboring numbers from the sorted array anyway.
function minimumAbsoluteDifference(arr) {

    var currentLoest = 100000000000;

    // numeric sort needs a function in JS, since the vanilla sort only does lexicographic sorting
    var sortedArray = arr.sort((a, b) => (a - b));

    for (var i = 1; i < sortedArray.length; i++) {
        var difference = Math.abs(sortedArray[i-1]-sortedArray[i]);
        if (difference < currentLowest) {
            currentLowest = difference;
        }
    }
    return currentLowest;
}


// non-optimal solition, because it creates an exponential number of arrays, which runs too long and uses to much memory
// function minimumAbsoluteDifference(arr) {
//   var results = [];
//   var firstElement = 0;

//   for (var i = 0; i < arr.length; i++) {
//     firstElement = arr[0];
//     arr.splice(0, 1);

//     for (var j = 0; j < arr.length; j++) {
//       results.push(Math.abs(firstElement - arr[j]));
//     }
//   }

//   return Math.min(...results);
// }