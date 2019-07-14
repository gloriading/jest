exports.minusFive = num => num - 5;
exports.timesTwo = num => num * 2;

// intergation test
exports.doMath = num => {
  let result = this.minusFive(num);
  return this.timesTwo(result);
}