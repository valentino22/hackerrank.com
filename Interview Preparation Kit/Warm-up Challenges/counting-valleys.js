function countingValleys(n, s) {
  let counter = 0;
  let finished_valley = 0;
  let previous = 0;
  Array.from(s).map(path => {
    previous = counter;
    if (path == "U") {
      counter++;
    } else {
      counter--;
    }
    if (counter == 0 && previous < 0) {
      finished_valley++;
    }
  });
  return finished_valley;
}