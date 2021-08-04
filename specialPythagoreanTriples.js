//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

//a2 + b2 = c2

//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc such that a + b + c = n.

//We will use Euclids formula to generate all Pythagorean triples
//check sum of triples against n.

//Euclids formula

//a = m^2 - n^2, b = 2mn, c = m^2 + n^2
//m > n > 0

//start n = 1, loop through m while m < 50

const specialPythagoreanTriplet = (num) => {
  let triples = [];
  // let n = 1;
  // let m = 2;
  // loop through n
  for (let n = 1; n <= 50; n++) {
    //loop through m
    for (let m = n + 1; m <= 51; m++) {
      let a = Math.pow(m, 2) - Math.pow(n, 2);
      let b = 2 * (m * n);
      let c = Math.pow(m, 2) + Math.pow(n, 2);
      let sum = a + b + c;
      if (sum === num) {
        let product = a * b * c;
        return product;
      }
    }
  }
};

console.log(specialPythagoreanTriplet(1000));
