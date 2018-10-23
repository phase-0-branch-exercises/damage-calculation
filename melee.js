/*

Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
  //your code here
  if(str === ''){
      return []
  }
  var splitStr = str.split(',')
  var heroStr = []
  var meleeArr = []
  var rangedArr = []
  var output = []
  for(var i = 0; i < splitStr.length; i++){
      heroStr.push(splitStr[i].split('-'))
  }
  for(var j = 0; j < heroStr.length; j++){
      if(heroStr[j][1] === 'Ranged'){
          rangedArr.push(heroStr[j][0])
      }else if(heroStr[j][1] === 'Melee'){
          meleeArr.push(heroStr[j][0])
      }
    }
    output.push(rangedArr)
    output.push(meleeArr)
    return output
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []