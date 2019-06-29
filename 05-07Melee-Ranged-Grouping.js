function meleeRangedGrouping (str) {
  let result = [];
  let preResult = [];
  let ranged = [];
  let melee = [];
  let temp = '';
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == '-' || str[i] == ',' || i == str.length) {
      preResult.push(temp);
      temp = '';
    } else {    
      temp += str[i];
    }
  }

  for (let i = 0; i < preResult.length; i++) {
    if (preResult[i] === 'Ranged') {
      ranged.push(preResult[i-1]);
    } else if (preResult[i] === 'Melee') {
      melee.push(preResult[i-1]);
    }
  }
  // return preResult;
  return [ranged, melee];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []