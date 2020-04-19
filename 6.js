/*Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/



function meleeRangedGrouping(str) {
    if (str.length === 0) {
        return []
    };
    var melee = [];
    var ranged = [];
    var group = str.split(',');
    var placeHolder = [];
    var result = [ranged, melee];
    for (var i = 0; i < group.length; i++) {
        temp = group[i].split('-');
        placeHolder.push(temp);
    }
    for (var i = 0; i < placeHolder.length; i++) {
        if (placeHolder[i][1] === 'Ranged') {
            ranged.push(placeHolder[i][0]);
        }
        if (placeHolder[i][1] === 'Melee') {
            melee.push(placeHolder[i][0]);
        }
    }
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []