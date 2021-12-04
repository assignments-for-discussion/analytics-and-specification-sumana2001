function average(numbers) {
  //filter NaN
  const filteredNumbers = numbers.filter(function (num) {
    return !Number.isNaN(num);
  });
  return filteredNumbers.reduce((p, c) => p + c, 0) / filteredNumbers.length;
}

module.exports = { average };
