/*
  GET RICH
  Get Rich adalah sebuah fungsi untuk memperkaya diri sendiri. Fungsi ini, akan
  menentukkan investasi berdasarkan nilai uang yang ada. Fungsi ini menerima
  parameter  duration dan akan mengembalikan nilai berupa object investasi yang 
  paling menguntungkan.

  PROCESS:
  input = getRich(4)
  4 => 1 year + 3 year
  output = [object saham minDuration 1, object saham minDuration 3]

  input = getRich(7)
  7 => 1 year + 3 year + 3 year
  output = [object saham minDuration 1, object saham minDuration 3, object saham minDuration 3]

  *untuk bentukkan output lebih jelas silahkan lihat pada Test Case

  RULES:
  1. Built in function yang boleh digunakan adalah .push(), .pop(), .shift(), .unshift(), Math
  , dan built in function lain yang disebutkan dalam rules
  2. Boleh menggunakan built in function untuk mengubah tipe data dari string ke number atau 
  sebaliknya
  3. Wajib Berurutan dari kecil ke besar minDuration kecil ke besar
*/

function getRich(duration) {
  var saham = [
    {
      name: 'Danone',
      percentagePerYear: '8%',
      minDuration: '3 years'
    },
    {
      name: 'Chiki',
      percentagePerYear: '6%',
      minDuration: '2 year'
    },
    {
      name: 'Roma',
      percentagePerYear: '5%',
      minDuration: '1 year'
    }
  ]
  // code below here
}

console.log(getRich(1))
// [ { name: 'Roma', percentagePerYear: '5%', minDuration: '1 year' } ]
console.log(getRich(2))
// [ { name: 'Chiki', percentagePerYear: '6%', minDuration: '2 year' } ]
console.log(getRich(4))
/*
  [ { name: 'Roma', percentagePerYear: '5%', minDuration: '1 year' },
  { name: 'Danone', percentagePerYear: '8%', minDuration: '3 years' } ]
*/ 
console.log(getRich(7))
/*
  [ { name: 'Roma', percentagePerYear: '5%', minDuration: '1 year' },
  { name: 'Danone', percentagePerYear: '8%', minDuration: '3 years' },
  { name: 'Danone', percentagePerYear: '8%', minDuration: '3 years' } ]
*/
