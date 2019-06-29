/*
  ////////////////////////////////////
  FUNCTION SECOND LARGEST NUMBER EXTRA
  ////////////////////////////////////

  Fungsi Second Largest Number Extra akan mengembalikkan nilai terbesar kedua.

  [PROCESS]

  INPUT:
  [
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [
      [1, 2, 3],
      [1, 2],
      [1]
    ]
  ]
  OUTPUT:
  2

  [RULES]
  - Apabila tidak ada nilai output yang di kembalikan, maka kembalikan 'No Number'
*/

function secondLargestNumberExtra(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      for (let k = 0; k < array[i][j].length; k++) {
        result.push(array[i][j][k]);
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }

  let one = [];
  for (let i = 0; i < result.length; i++) {
    let sama = false;
    for (let j = 0; j < result.length; j++) {
      if (result[i] === one[j]) {
        sama = true;
      }
    } 

    if (!sama) {
      one.push(result[i]);
    }
  }

  return one.length <= 1 ? 'No number' : one[1];
}

//TEST CASE
console.log(secondLargestNumberExtra([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 2

console.log(secondLargestNumberExtra([
  [
    [1, 1],
    [1],
    [1, 1]
  ],
  [
    [1],
    [1],
    [1, 1]
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
    [1]
  ],
  [
    [1]
  ]
])); // No number

console.log(secondLargestNumberExtra([])); // No number