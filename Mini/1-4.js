/*
  ///////////////////
  FUNCTION UBAH MODUS
  ///////////////////

  Fungsi Ubah Modus adalah sebuah fungsi yang mengubah modus dengan nama yang baru

  [PROCESS]

  INPUT:
  arrayModus = ['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela']
  modusBaru = 'Dilla'
  OUTPUT:
  ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']

  [RULES]

  - Asumsi selalu ada modus dan newModus
*/

function ubahModus(arrayModus, newModus) {
  let result = [];
  for (let i = 0; i < arrayModus.length; i++) {
    let sama = false;
    for (let j = 0; j < result.length; j++) {
      if (arrayModus[i] === result[j]) {
        sama = true;
      }
    } 

    if (!sama) {
      result.push(arrayModus[i]);
    }
  }

  result.length !== arrayModus.length ? result.push(newModus) : arrayModus;

  return result;
}

// TEST CASES
console.log(ubahModus(['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela'], 'Dilla'))
// ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']
console.log(ubahModus(['Anita', 'Reina', 'Anita'], 'Sora'))
// ['Sora', 'Reina', 'Sora']