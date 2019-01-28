/*
Logic Challenge: Melee Ranged Grouping

Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/
function meleeRangedGrouping (str) {
    //your code here
    var result = [];
    var word = ''
    // var temp = str.split(",")
    for(var i = 0; i < str.length; i++) {
        if(str[i] != ',') {
            word += str[i];
        } else {
            result.push([word]);
            word = ''
        }
        if(i == str.length - 1) {
            result.push([word]);
        }
    }

    var final = [];
    for(var i = 0; i < result.length; i++) {
        var temp = [];
        for(var j = 0; j < result[i].length; j++) {
            var word1 = '';
            for(var k = 0; k < result[i][j].length; k++) {
                if(result[i][j][k] != '-') {
                    word1 += result[i][j][k];
                } else {
                    temp.push(word1);
                    word1 = '';
                }
                if(k == result[i][j].length - 1) {
                    temp.push(word1)
                }
            }
        }
        final.push(temp);
    }
    
    var objResult = {};
    for(var i = 0; i < final.length; i++) {
        if(!objResult[final[i][1]]) {
            objResult[final[i][1]] = [];
        }
        objResult[final[i][1]].push(final[i][0])
    }
    var values = Object.values(objResult)
    return values;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []