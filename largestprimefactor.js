//is number prime?
//to determine of number is prime, find the square root of that number, then find all primes smaller than the sqrt
//if not divisible by any of these numbers, then it is a prime number
const isPrime = (num) => {
  if (num === 2) return true;

  const sqrt = Math.ceil(Math.sqrt(num));
  const listOfPrimes = primesUnderVal(sqrt);
  console.log(listOfPrimes);
  //if num is divisible by any of the primes less than the square root of num, then num is not prime
  return !listOfPrimes.some((prime) => num % prime === 0);
};

const primesUnderVal = (num) => {
  let primes = Array(num + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (primes[i]) {
      for (let j = i * 2; j <= num; j += i) {
        primes[j] = false;
      }
    }
  }
  //convert array of true and false values to array of all primes less than num
  return primes.map((x, index) => (x ? index : null)).filter((x) => x);
};

////take starting number x, find lowest prime that evenly divides x,
//store that number in prime values array, repeat with quotient untill quotient is prime
//return largest prime form list
const primesUnder10000 = primesUnderVal(10000);

const lowestPrimeDivisor = (val) => primesUnder10000.filter((prime) => val % prime === 0)[0];

const largestPrimeFactor = (num) => {
  if (isPrime(num)) return num;

  let primeFactors = [];
  let quotient = 4;
  while (!isPrime(quotient)) {
    quotient = num / lowestPrimeDivisor(num);
    primeFactors.push(lowestPrimeDivisor(num));
    console.log(primeFactors);
    num = quotient;
  }

  primeFactors.push(quotient);

  return primeFactors.reduce((a, b) => (a > b ? a : b));
};

console.log(largestPrimeFactor(600851475143));

//console.log(list.map((item) => num / item));
let num = 10086647;
//console.log(num / lowestPrimeDivisor(num));
// let nextNum = num / lowestPrimeDivisor(num);
// console.log(nextNum / lowestPrimeDivisor(nextNum));
