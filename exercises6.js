function meleeRangedGrouping(str) {
    var sstr = str.split(',')
    var arr2 = []
    var res = []
    var ranged = []
    var melee = []

    if (str.length === 0) {
        return res
    }

    for (var i = 0; i < sstr.length; i++) {
        arr2.push(sstr[i].split('-'))
    }

    for (var a = 0; a < arr2.length; a++) {
        // for(var b=0;b<arr2[a].length;b++){
        if (arr2[a][1] === 'Ranged') {
            ranged.push(arr2[a][0])
        } else {
            melee.push(arr2[a][0])
        }
        // }
    }
    res.push(ranged)
    res.push(melee)
    // console.log(tmp2)
    // console.log(sstr)
    // console.log('arr2 ', arr2)
    // console.log('arr1 ', arr1)
    return res
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []