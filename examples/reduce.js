var values = [1, -5, -2, 3, 12, -14, 0, 23, -1, 8];

let sum = values.reduce(function(accumulator, v) {
  return accumulator + v;
}, 0);              // zero is the initial value of the accumulator

console.log('The sum is', sum);
