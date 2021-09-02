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

const grid = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48],
];

const testGrid = [
  [40, 17, 81, 18, 57],
  [74, 4, 36, 16, 29],
  [36, 42, 69, 73, 45],
  [51, 54, 69, 16, 92],
  [7, 97, 57, 32, 16],
];

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

const largestDiagonalLeftToRight = (arr, length) => {
  let idxB = 0;
  let product = 0;
  let largestProduct = 0;

  while (idxB <= length - 4) {
    //iterate through the row, while j < length -  4
    for (let j = 0; j <= length - 4; j++) {
      let currentSequence = [];
      let idxA = j;
      //y axis
      for (let i = idxB; i <= idxB + 3; i++) {
        console.log(idxA);
        currentSequence.push(arr[i][idxA]);
        idxA++;
      }
      console.log(currentSequence);
      product = currentSequence.reduce((a, b) => a * b);
      console.log(product);
      largestProduct = product > largestProduct ? product : largestProduct;
    }
    idxB++;
  }
  return largestProduct;
};

const largestGridProduct = (arr) => {
  let length = arr.length;
  let leftToRight = largestLeftToRight(arr, length);
  let topToBottom = largestTopToBottom(arr, length);
  let diagonalRightToLeft = largestDiagonalRightToLeft(arr, length);
  let diagonalLeftToLeft = largestDiagonalLeftToRight(arr, length);

  const all = [leftToRight, topToBottom, diagonalLeftToLeft, diagonalRightToLeft];
  console.log(all);
  const greatestProduct = all.reduce((a, b) => {
    return a > b ? a : b;
  });
  return greatestProduct;
};

console.log(largestGridProduct(testGrid));

//calculate largest product of topToBottom function, create left to right and right to left diagonal function
