/*
========
MARATHON
========

[INSTRUCTION]
Kamu mengikuti lomba marathon, dengan rute lintasan tertentu dan stamina tertentu;

[EXAMPLE]
input lintasan: 'XXXXXXOOO-XXOOXXXXXOO-XXXXO'

'X' adalah jalan datar yang akan mengkonsumsi 1 stamina dengan maskimal repetisi 'X' 4 kali  ('XXXX')
'O' adalah jalan menanjak yang akan mengkonsumsi 1 stamina dengan maksimal repetisi 'O' 2 kali ('OO')
'-' adalah spot minum meningkatkan 2 stamina

partisi track:   XXXX XX OO O -  X   X O   O X   X  X  X XOO-XXXXO
stamina      : 5    4  3  2 1 3      2     1           0 (ENERGI HABIS, TIDAK BISA MELANJUTKAN)
jarak lari   :   1234 56 78 9 10 11,12 13,14 15,16,17,18
input stamina: 5
output: Selamat anda telah menempuh jarak 18

[RULES]
- Dilarang menggunakan .split, .join, .map, .sort, .filter, .indexOf, .includes

*/

function marathon(track, stamina) {
  let x = 0;
  let o = 0;
  let result = 0;
  for (let i = 0; i < track.length; i++) {
    if (stamina === 0) {
      break;
    }
    if (track[i] === 'X') {
      if (o === 0 && x < 4) {
        x += 1;
        result += 1;
      } else if (o > 0) {
        x += 1;
        o = 0;
        stamina -= 1;
        result += 1;
      } else if (x === 4) {
        x = 1;
        stamina -= 1;
        result += 1;
      }
    } else if (track[i] === 'O') {
      if (x === 0 && o < 2) {
        o += 1;
        result += 1;
      } else if (x > 0) {
        o += 1;
        x = 0;
        stamina -= 1;
        result += 1;
      } else if (o === 2) {
        o = 1;
        stamina -= 1;
        result += 1;
      }
    } else if (track[i] === '-') {
      stamina += 2;
    }
  }

  return result == track.length ? 'Selamat anda telah menempuh garis finish' : result + ' km';

};

console.log(marathon('XXXXXXOOO-XXOOXXXXXOO-XXXXO', 5)); //Selamat anda telah menempuh jarak 18 km
console.log(marathon('XXXXXXOOOXXOOXXXXXOOXXXXO', 5)); //Selamat anda telah menempuh jarak 11 km
console.log(marathon('XXXXXXXX', 3)); //Selamat anda telah menempuh garis finish