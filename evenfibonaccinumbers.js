//By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

//generate fib nums in a given range, after each nu,ber is generated, test if it is even, add to sum if even

const fiboEvenSum = (num) => {
  let fiboArr = [1, 2];
  const getLastIndex = (arr) => arr.length - 1;
  while (fiboArr[getLastIndex(fiboArr)] <= num) {
    let numToAdd = fiboArr[getLastIndex(fiboArr)] + fiboArr[getLastIndex(fiboArr) - 1];

    fiboArr.push(numToAdd);
  }
  console.log(fiboArr);
  const isEven = (num) => {
    return num % 2 === 0 ? num : 0;
  };
  return fiboArr
    .filter((item) => item <= num)
    .reduce((sum, val) => {
      return sum + isEven(val);
    }, 0);
};

console.log(fiboEvenSum(100000));
