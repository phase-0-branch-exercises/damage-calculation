function indexKe (str, search){
    for (var i = 0; i < str.length; i ++){
        if (str[i] === search){
            return i;
        }
    }
    return -1;
}
function meleeRangedGrouping (str) {
    if(str.length < 1){
        return [];
    }
    var tampung = [];
    var pemisah = '';
    for (var i = 0; i < str.length; i ++){
        pemisah = pemisah + str[i];
        if(str[i+1] === ','){
            tampung.push(pemisah);
            i = i + 1;
            pemisah = '';
        }
    }
    tampung.push(pemisah);
    var heroRanged = [];
    var heroMelee = [];
    var output = [];
    for (var i = 0; i < tampung.length; i ++){
        var tempTipe = '';
        var tempHero = '';
        for (var j = indexKe(tampung[i],'-'); j < tampung[i].length - 1; j ++){
            tempTipe = tempTipe + tampung[i][j + 1];
        }     
        for (var j = 0; j < indexKe(tampung[i],'-'); j ++){
            tempHero = tempHero + tampung[i][j];
        }
        if (tempTipe === 'Ranged'){
            heroRanged.push(tempHero);
        }
        else if (tempTipe === 'Melee'){
            heroMelee.push(tempHero);
        }
    }
    output.push(heroRanged, heroMelee)

    return output;
    
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []