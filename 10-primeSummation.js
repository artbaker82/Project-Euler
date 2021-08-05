// Find the sum of all the primes below n.
//get all the primes, add them up
//sieve of Eratosthenes to find all primes below n

// const primesUnderVal = (num) => {
//     let primes = Array(num + 1).fill(true);
//     primes[0] = false;
//     primes[1] = false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (primes[i]) {
//         for (let j = i * 2; j <= num; j += i) {
//           primes[j] = false;
//         }
//       }
//     }
//     //convert array of true and false values to array of all primes less than num
//     return primes.map((x, index) => (x ? index : null)).filter((x) => x);
//   };

const primeSummation = (n) => {
  //usually its Array(n + 1), but if last number is prime, we don't want it, because we want primes UNDER n
  let primes = Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i * 2; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  //convert array of true and false values to array of all primes less than num, reduce added to get sum

  return primes
    .map((x, index) => (x ? index : null))
    .filter((x) => x)
    .reduce((a, b) => a + b);
};

console.log(primeSummation(140759));
