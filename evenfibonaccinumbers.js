//By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

//generate fib nums in a given range, after each nu,ber is generated, test if it is even, add to sum if even

const fiboEvenSum = (num) => {
  let sum = 0;
  let fiboArr = [1, 2];
  //   let highestValIndex = {
  //       index: fiboArr.length - 1,
  //     };
  while (fiboArr[fiboArr.length - 1] <= num) {
    let numToAdd = fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2];

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

console.log(fiboEvenSum(4000000));
