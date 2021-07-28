//Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

//sum of squares

const sumOfSquares = (n) => {
  const sum = Array.from({ length: n }, (_, i) => i + 1)
    .map((x) => Math.pow(x, 2))
    .reduce((sum, val) => {
      return sum + val;
    });

  //should equal 385
  return sum;
};

//square of sum

const squareOfSum = (n) => {
  const sum = Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => {
    return a + b;
  });

  return Math.pow(sum, 2);
  // 3025
};

const sumSquareDiff = (n) => {
  return squareOfSum(n) - sumOfSquares(n);
};

console.log(sumSquareDiff(100));
