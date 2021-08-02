// //What is the nth prime number?

// //use Sieve of eratosthenes to get prime numbers
// const primesUnderVal = (num) => {
//   let primes = Array(num + 1).fill(true);
//   primes[0] = false;
//   primes[1] = false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (primes[i]) {
//       for (let j = i * 2; j <= num; j += i) {
//         primes[j] = false;
//       }
//     }
//   }
//   //convert array of true and false values to array of all primes less than num
//   //return primes.map((x, index) => (x ? index : null)).filter((x) => x);
// };

// const nthPrime = (num) => {
//   //use sieve of eratosthenes to generate 15 times more primes than n
//   let sieveRange = num * 15;
//   console.log(sieveRange);
//   console.log(num);
//   let primes = Array(sieveRange + 1).fill(true);
//   primes[0] = false;
//   primes[1] = false;

//   for (let i = 2; i <= Math.sqrt(sieveRange); i++) {
//     if (primes[i]) {
//       for (let j = i * 2; j <= sieveRange; j += i) {
//         primes[j] = false;
//       }
//     }
//   }
//   // convert to numbers, filter out non primes, return index n -1, since that would be the nth prime
//   let primeNums = primes
//     .map((val, idx) => {
//       return val ? idx : null;
//     })
//     .filter((x) => x)[num - 1];
//   console.log(primeNums);
// };
// nthPrime(10001);

///freecodecamp solution

function nthPrime(n) {
  const primes = [2];

  let num = 3,
    isPrime = true;

  //loop until primesarray equals n

  while (primes.length < n) {
    //all the prime numbers less than n are always <= square root of n
    let max = Math.ceil(Math.sqrt(num));
    for (let i = 0; primes[i] <= max; i++) {
      //if num is divisible by any of the primes less than the square root, num is composite
      if (num % primes[i] == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primes.push(num);
    isPrime = true;

    //An optimization technique, since we know of all even numbers only 2 is a prime number, we can skip the rest
    num += 2;
  }
  //return the last number
  return primes[primes.length - 1];
}

console.log(nthPrime(100));
