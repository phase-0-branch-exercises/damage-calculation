function meleeRangedGrouping (str) {
    if (str.length == 0){
        return []
    }
    var hasilRanged = []
    var hasilMelee = []
    var hasilTotal = []
    var tampung = str.split(',')
    for (let i = 0; i < tampung.length; i++) {
        var tampung1 = tampung[i].split('-')
        if (tampung1[1] == 'Ranged'){
            hasilRanged.push(tampung1[0])
        } else if (tampung1[1] == 'Melee'){
            hasilMelee.push(tampung1[0])
        }
    }
    hasilTotal.push(hasilRanged)
    hasilTotal.push(hasilMelee)
    return hasilTotal
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []