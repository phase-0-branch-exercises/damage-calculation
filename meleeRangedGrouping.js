function meleeRangedGrouping (str) {
    var heroes = [];
    if (str === ''){
        return heroes;
    }
    
    var arr = str.split(',');
    for (var i=0; i<arr.length; i++){
        var attack = arr[i].split('-');
        heroes.push(attack);
        // console.log(heroes)
    }
    var newHeroes = [], ranged = [], melee = [];
    for (var i=0; i<heroes.length; i++){
        if (heroes[i][1] === 'Ranged'){
            ranged.push(heroes[i][0]);
        }
        else{
            melee.push(heroes[i][0])
        }
    }
    
    newHeroes.push(ranged,melee);

    return newHeroes;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []