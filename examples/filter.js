var values = [1, -5, -2, 3, 12, -14, 0, 23, -1, 8];

var negValues = values.filter( function(v) {
  return v < 0;
});

console.log('The negative values are:', negValues);
