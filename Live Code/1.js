/*
========================
LETTER GROUPING
========================
[INSTRUCTIONS]
Letter grouping adalah sebuah fungsi yang menerima parameter berupa string huruf
dan akan mengembalikan nilai berupa array dengan masing-masing kelompok angka.

RULES:
1. Tidak perlu menggunakan pseudocode
2. Tidak boleh menggunakan built in function .sort()
3. Group selalu dimulai dari huruf A dan diakhiri dengan huruf terakhir sesuai
input yang diberikan

EXAMPLE
INPUT: "AAABCF"
OUTPUT:
  [
    ["A", "A", "A"],
    ["B"],
    ["C"],
    [],
    [],
    ["F"]
  ]

NOTES:
1. Pada contoh, karena huruf "D" dan "E" tidak ada dalam input,
maka hanya berisi array kosong
2. Total array atau kelompok angka sesuai angka terakhir pada input.
3. WAJIB menggunakan PSEUDOCODE
*/

function letterGrouping(letters) {
  // // STORE empty array in VAR result;
  // let result = [];
  // // STORE 0 IN VARA and VARB and VARC and VARD and VARE and VARF
  // let varA = 0;
  // let varB = 0;
  // let varC = 0;
  // let varD = 0;
  // let varE = 0;
  // let varF = 0;

  // // FOR LOOP in VAR letter decrease letter length
  // for (let i = 0; i < letters.length; i++) {
  //   // IF VAR letter index i equal 'A'
  //   if (letters[i] == 'A') {
  //     // DO plus 1 in VAR VARA
  //     varA += 1;
  //   // ELSE IF VAR letter index i equal 'B'
  //   } else if (letters[i] == 'B') {
  //     // DO plus 1 in VAR VARB
  //     varB += 1;
  //   // ELSE IF VAR letter index i equal 'C'
  //   } else if (letters[i] == 'C') {
  //     // DO plus 1 in VAR VARC
  //     varC += 1;
  //   // ELSE IF VAR letter index i equal 'D'
  //   } else if (letters[i] == 'D') {
  //     // DO plus 1 in VAR VARD
  //     varD += 1;
  //   // ELSE IF VAR letter index i equal 'E'
  //   } else if (letters[i] == 'E') {
  //     // DO plus 1 in VAR VARE
  //     varE += 1;
  //   // ELSE IF VAR letter index i equal 'F'
  //   } else if (letters[i] == 'F') {
  //     // DO plus 1 in VAR VARF
  //     varF += 1;
  //   }
  // }

  // // STORE ARB and VARC and VARD and VARE and VARF in VARIABLE total
  // let total = [varA, varB, varC, varD, varE, varF];
  // // STORE array empty in VAR total 
  // let temp = [];

  // for (let i = 0; i < total.length; i++) {
  //   if (i == 0) {
  //     for (let j = 0; j < total[i]; j++) {
  //       temp.push('A');
  //     }
  //   } else if (i == 1) {
  //     for (let j = 0; j < total[i]; j++) {
  //       temp.push('B');
  //     }
  //   } else if (i == 2) {
  //     for (let j = 0; j < total[i]; j++) {
  //       temp.push('C');
  //     }
  //   } else if (i == 3) {
  //     for (let j = 0; j < total[i]; j++) {
  //       temp.push('D');
  //     }
  //   } else if (i == 4) {
  //     for (let j = 0; j < total[i]; j++) {
  //       temp.push('E');
  //     }
  //   } else if (i == 5) {
  //     for (let j = 0; j < total[i]; j++) {
  //       temp.push('F');
  //     }
  //   }
  //   result.push(temp);
  //   temp = [];
  // }


  // return result;

  // METHOD 2
  let str = '';
  let urut = [];
  for (let i = 0; i < letters.length; i++) {
    urut.push(letters[i]);
  }

  for (let i = 0; i < urut.length; i++) {
    for (let j = i + 1; j < urut.length; j++) {
      if (urut[i].charCodeAt() > urut[j].charCodeAt()) {
        let temp = urut[i];
        urut[i] = urut[j];
        urut[j] = temp;
      }
    }
  }

  for (let i = 0; i < urut.length; i++) {
    str += urut[i];
  }

  let start = 'A'.charCodeAt();
  let finish = 'F'.charCodeAt();
  let result = [];
  for (let i = start; i <= finish; i++) {
    let temp = [];
    for (let j = 0; j < str.length; j++) {
      if (i == str[j].charCodeAt()) {
        temp.push(str[j]);
      }
    }
    result.push(temp);
  }

  return result;
}

console.log(letterGrouping('ABDCCCE')); // [ [ 'A' ], [ 'B' ], [ 'C', 'C', 'C' ], [ 'D' ], [ 'E' ] ]
console.log(letterGrouping('ABC')); // [ [ 'A' ], [ 'B' ], [ 'C' ] ]
console.log(letterGrouping('F')); // [[], [], [], [], [], ['F]]
console.log(letterGrouping('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(letterGrouping('BBABB')); // [[ 'A' ], [ 'B', 'B', 'B', 'B' ]]