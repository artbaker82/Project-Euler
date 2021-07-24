// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

//first idea is to brute force multiply using two for loops, checking solution for palindrome over each iteration
//check for palindrome

const isPalindrome = (num) => {
  let numArr = Array.from(String(num), Number);
  let pointer1 = 0;
  let pointer2 = numArr.length - 1;

  //loop while index of pointer 2 (left index) is greater than right AND pointer 2 and 1 are equal (palindrome)
  while (pointer2 >= pointer1) {
    console.log(numArr[pointer1], numArr[pointer2]);
    if (numArr[pointer2] !== numArr[pointer1]) {
      return false;
    }
    pointer1++;
    pointer2--;
  }

  return true;
};

//console.log(isPalindrome(12345654321));

const largestPalindromeProduct = (nDigits) => {
  //dymanically calculate highest possible number considering n-digits
  let scaler = Array.from({ length: nDigits }).fill(3).join("");
  let max = scaler * 3;
  let palindromes = [];

  //brute force multiply, there is probably a much better way to do this!

  for (let i = max; i >= max - 100; i--) {
    for (let j = i; j >= max - 100; j--) {
      let product = i * j;
      //console.log(`${i} * ${j} = ${product}`);
      if (isPalindrome(product)) {
        //palindromes.push(product);
        return product;
      }
    }
  }
  // console.log(palindromes.includes(906609));
  // console.log(palindromes);
  // return palindromes.reduce((a, b) => {
  //   return a > b ? a : b;
  // });
};

console.log(largestPalindromeProduct(3));

//problem, this works, but takes WAY TOO LONG!
//do some research on palindromic numbers, (both test cases are multiples of 3!)
