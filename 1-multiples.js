// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

const multiplesOf3and5 = (range) => {
  let sum = 0;
  for (let i = 0; i < range; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
      sum += i;
    }
  }

  return sum;
};

console.log(multiplesOf3and5(1000));
