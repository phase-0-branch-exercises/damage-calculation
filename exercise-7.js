function sliceTheHeroes(str) {
    var hasil = [];
    var temp = '';
    for (var a = 0; a <= str.length; a++) {
        if (str[a] == ',' || a == str.length) {
            hasil.push(temp);
            temp = '';
        }
        else {
            temp += str[a]
        }
    }
    return hasil
}

function sliceTheDash(str) {
    var grup = sliceTheHeroes(str);
    var hasil = [];
    for (let a = 0; a < grup.length; a++) {
        hasil.push(grup[a].split('-'))
    }
    return hasil
}

function meleeRangedGrouping(str) {
    var tanpaDash = sliceTheDash(str);
    var hasil = [[],[]];
    if (str.length == 0) {
        return [];
    } else
    for (let a = 0; a < tanpaDash.length; a++) {
        if (tanpaDash[a][1] === 'Ranged') {
            hasil[0].push(tanpaDash[a][0])
        } else
        if (tanpaDash[a][1] === 'Melee') {
            hasil[1].push(tanpaDash[a][1])
        }
    }
    return hasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []