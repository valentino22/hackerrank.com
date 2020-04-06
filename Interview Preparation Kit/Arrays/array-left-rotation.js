// Complete the rotLeft function below.
function rotLeft(a, d) {
  var numbers = a.slice(d, a.length).concat(a.slice(0, d));
  return numbers;
}