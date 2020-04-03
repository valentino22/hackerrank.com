function jumpingOnClouds(c) {
  let counter = 0;
  for (var index = 0; index < c.length; index++) {
    if (c[index + 2] == 0) {
      counter++;
      index++;
    } else if (c[index + 1] == 0) {
      counter++;
    }
  }
  
  return counter;
}