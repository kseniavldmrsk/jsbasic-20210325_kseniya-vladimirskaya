function filterRange(arr, a, b) {
  let n = 0;
  let res = [];
  for (n = 0; n < arr.length; n++) {
      if (arr[n] >= a && arr[n] <= b) {
          res.push(arr[n]);
      }
  }
  return res;
}
