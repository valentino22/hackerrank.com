function sockMerchant(n, ar) {
  let buffer = [];
  let counter = 0;
  ar.map(element => {
    if (buffer.indexOf(element) >= 0) {
      counter++;
      buffer.splice(buffer.indexOf(element), 1);
    } 
    else
    {
      buffer.push(element);
    }
  });

  return counter;
}