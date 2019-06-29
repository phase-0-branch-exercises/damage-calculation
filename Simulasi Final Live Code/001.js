/*
=============
TUG OF WAR WINNER
=============
Name :_____________
[INSTRUCTIONS]
Tug of War adalah sebuah function yang menerima string sebagai tarik tambang antara 2 belah pihak
Kamu harus bisa menentukan pemenang dari permainan tarik tambang ini dengan cara mengukur kekuatan setiap pemain
Kekuatan pemain ada 3 Level 
  - A = 1 
  - B = 2
  - C = 3

Sisi dengan kekuatan terbanyak akan menang dan jika kekuatannya sama maka hasilnya akan draw

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.

[EXAMPLE]
tugOfWar('ABCA--V--ABCC')
Skor team kiri: 7
Skor team kanan: 9
output: Team KANAN Menang!

[Tulis PSEUDOCODE di bawah ini]
// Nilai tidak valid (0) jika logic dan PSEUDOCODE berbeda!
// Tidak harus formal pseudocode, tapi paling tidak jelaskan step by step logikanya
*/

function tugOfWar(sentence) {
  // STORE 0 in VAR teamKiri
  let teamKiri = 0;
  // STORE 0 in VAR teamKanan
  let teamKanan = 0;
  // STORE 0 in VAR idxPusat
  let idxPusat = 0;

  // FOR LOOP get index VAR sentence increment
  for (let i = 0; i < sentence.length; i++) {
    // IF VAR sentence index i equal V
    if (sentence[i] === 'V') {
      // DO plus 1 in VAR idxPusat
      idxPusat += i;
    }
  }

  // FOR LOOP get index VAR sentence increment
  for (let i = 0; i < sentence.length; i++) {
    // IF sentence index i equal A
    if (sentence[i] === 'A') {
      // IF i lower than VAR idxPusat
      if (i < idxPusat) {
        // DO plus 1 in VAR teamKiri
        teamKiri += 1;
      // ELSE
      } else {
        // DO plus 1 in VAR teamKanan
        teamKanan += 1;
      }
    // ELSE IF sentence index i equal B
    } else if (sentence[i] === 'B') {
      // IF i lower than VAR idxPusat
      if (i < idxPusat) {
        // DO plus 2 in VAR teamKiri
        teamKiri += 2;
      // ELSE
      } else {
        // DO plus 2 in VAR teamKanan
        teamKanan += 2;
      }
    // ELSE IF sentence index i equal C
    } else if (sentence[i] === 'C') {
      // IF i lower than VAR idxPusat
      if (i < idxPusat) {
        // DO plus 3 in VAR teamKiri
        teamKiri += 3;
        // ELSE
      } else {
        // DO plus 3 in VAR teamKanan
        teamKanan += 3;
      }
    }
  }

  // IF VAR teamKanan equal 0 AND teamKiri equal 0
  if (teamKanan === 0 && teamKiri === 0) {
    // RETURN 'NO PLAYERS'
    return 'NO PLAYERS';
  // ELSE IF VAR teamKanan same with VAR teamkiri AND VAR teamKanan not equal 0 AND teamKiri not equal 0
  } else if (teamKanan === teamKiri && teamKanan !== 0 && teamKiri !== 0) {
    // RETURN 'DRAW'
    return 'DRAW';
  }

  // RETURN IF VAR teamKiri lower than VAR teamKanan 'Team Kiri Menang!' ELSE ''Team KANAN Menang!'
  return teamKiri > teamKanan ? 'Team Kiri Menang!' : 'Team KANAN Menang!';
};

console.log(tugOfWar('ABCA--V--ABCC')); // "Team KANAN Menang!"
console.log(tugOfWar('CC--V--AAAA')); // "Team Kiri Menang!"
console.log(tugOfWar('BBBB--V--CCC')); // "Team KANAN Menang!"
console.log(tugOfWar('AAAA--V--CA')); // 'DRAW'
console.log(tugOfWar('--V--')); // 'NO PLAYERS'