//What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in a given arr grid?

//5 X 5 grid

//take starter number
//there are 6 possible directions (l-r, r-l, t-b, b-t, d-r, d-l)
//idx[a] refers to x axis, idx[b] refers to y axis
//conditions for each direction
//l-r- idx[a] <= arr.length - 4
//t-b idx[b] <= arr.length - 4
//dl-r idx[a] <=arr.length - 4 && idx[b] <= arr.length -4
//dr-l idx[a] >= 3 && idx[b] <= length - 4

const largestLeftToRight = (arr, length) => {
  //get section of the row
  let start = 0;
  let end = 4;
  //y axis
  let idxB = 0;
  let largestProduct = 0;

  while (idxB <= length - 4) {
    while (start <= length - 4) {
      product = arr[idxB].slice(start, end).reduce((a, b) => a * b);
      if (largestProduct < product) {
        largestProduct = product;
      }
      //update section of row in view
      start++;
      end++;
    }
    //move down one row
    idxB++;
  }
  return largestProduct;
};

const testGrid = [
  [40, 17, 81, 18, 57],
  [74, 4, 36, 16, 29],
  [36, 42, 69, 73, 45],
  [51, 54, 69, 16, 92],
  [7, 97, 57, 32, 16],
];

const largestTopToBottom = (arr, length) => {
  let idxB = 0;

  let product = 0;
  let largestProduct = 0;

  while (idxB <= length - 4) {
    //iterating over x axis (rows)
    for (let j = 0; j <= length; j++) {
      let currentSequence = [];
      //iterating through y axis (columns)
      for (let i = idxB; i <= idxB + 3; i++) {
        currentSequence.push(arr[i][j]);
        //if product of current sequence is larger than largestProduct, largestProduct = currentSequence
      }
      if (currentSequence[0]) {
        console.log(currentSequence);
        product = currentSequence.reduce((a, b) => a * b);
        console.log(product);
        largestProduct = product > largestProduct ? product : largestProduct;
      }
    }
    //move down one row
    idxB++;
  }
  return largestProduct;
};

const largestDiagonalRightToLeft = (arr, length) => {
  let idxB = 0;
  let product = 0;
  let largestProduct = 0;

  while (idxB <= length - 4) {
    //iterate through the row, each row starts on index 3
    for (let j = 3; j < length; j++) {
      //keep track of current sequence being viewed
      let currentSequence = [];

      let idxA = j;
      //iterate down
      for (let i = idxB; i <= idxB + 3; i++) {
        console.log(idxA);
        currentSequence.push(arr[i][idxA]);
        idxA--;
      }
      console.log(currentSequence);
      product = currentSequence.reduce((a, b) => a * b);
      largestProduct = largestProduct = product > largestProduct ? product : largestProduct;
    }
    idxB++;
  }
  return largestProduct;
};
console.log(largestDiagonalRightToLeft(testGrid, 5));

const largestGridProduct = (arr) => {
  let length = arr.length;
  let leftToRight = largestLeftToRight(arr, length);
  let topToBottom = largestTopToBottom(arr, length);
  let diagonalRightToLeft = largestDiagonalRightToLeft(arr, length);
  return leftToRight; //continue for 3 other directions
};

//console.log(largestGridProduct(testGrid));

//calculate largest product of topToBottom function, create left to right and right to left diagonal function
