//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
//find the lcm(least common multiple of a range from 1 to n).

//we will use the Euclidean Algorithm to find the GCD of the range,
//then apply that to find the LCM

//LCM  of 4 and 6 is 12, because 12 is the lowest number that is divisible by both 4 and 6.

//we can also use the prime factorization method, I will attempt the challenge with both strategies!

// Euclidean Algorithm- based on the principle that the greatest common divisor does not change
//if the larger number is replaced by it's difference with the smaller number.

//using subtraction

//1- take a - b = n
//2- if n is 0, return a
//3- if n is greater than b replace a with n and repeat, else replace a with b and b with n and repeat

// recusive function using subtraction

const findGCDSubtraction = (a, b) => {
  const difference = a - b;
  if (difference === 0) return a;
  return difference > b ? findGCDSubtraction(difference, b) : findGCDSubtraction(b, difference);
};

//console.log(findGCDSubtraction(252, 105));

//same principle using division--
//1- a by b to get a remainder r
//2- if r===0 then b is GCD
//3- else replace a with b and b with r and repeat

//recursive function to find GCD using Euclidean Algorithm

const findGCD = (a, b) => {
  if (b === 0) return a;
  return findGCD(b, a % b);
};

const findLcm = (a, b) => (a * b) / findGCD(a, b);

const smallestMult = (n) => {
  //create array of numbers in range from greatest to least
  const numArr = Array.from({ length: n }, (_, i) => i + 1).reverse();
  return numArr.reduce((lcm, num) => {
    return findLcm(lcm, num);
  });
};

console.log(smallestMult(20));
