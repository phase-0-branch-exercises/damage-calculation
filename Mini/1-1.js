/*
  ///////////////////////////
  FUNCTION PSEUDOCODE MASTERY
  ///////////////////////////

  Fungsi Pseudocode Mastery adalah fungsi yang mengharuskan penggunanya membuat mampu pseudocode

  [PROCESS]

  INPUT:
  [1, 2, 3, 4, 5]
  PROCESS:
  bila index ganjil dikali 2
  bila index genap dikali 3
  [1 * 2, 2 * 3, 3 * 2, 4 * 3, 5 * 2]
  OUTPUT:
  [2, 6, 6, 12, 10]

  [RULES]
  - WAJIB menggunakan PSEUDOCODE atau nilai 0
*/

function pseudocodeMastery(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      result.push(array[i] * 2);
    } else {
      result.push(array[i] * 3);
    }
  }

  return result;
}

// TEST CASES
console.log(pseudocodeMastery([1, 2, 3, 4, 5]))
// [2, 6, 6, 12, 10]