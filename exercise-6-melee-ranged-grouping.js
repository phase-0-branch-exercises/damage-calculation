// ========== CARA SPLIT MANUAL ===========
function meleeRangedGrouping (str) {
    var result = []
    if (str.length === 0) {
        return result;
    }
    var tampungStr = '';
    var arrStr = []
    for(var i = 0; i < str.length; i++){
        if (str[i] !== ',') {
            tampungStr += str[i]
        } else {
            arrStr.push(tampungStr)
            tampungStr = ''
        }
    }
    arrStr.push(tampungStr)
    // console.log(arrStr); // [ 'Razor-Ranged', 'Invoker-Ranged', 'Meepo-Melee', 'Axe-Melee', 'Sniper-Ranged' ]

    var tampungArr = []
    for(var i = 0; i < arrStr.length; i++){
        var arrstring = ''
        var arr = []
        for(var j = 0; j < arrStr[i].length; j++){
            if (arrStr[i][j] !== '-') {
                arrstring += arrStr[i][j]                
            } else {
                arr.push(arrstring)
                arrstring = ''
            }
        }
        arr.push(arrstring);    
        tampungArr.push(arr);
    }
    // console.log(arr);           // [ 'Sniper', 'Ranged' ]
    // console.log(tampungArr);    // [ [ 'Razor', 'Ranged' ], [ 'Invoker', 'Ranged' ],[ 'Meepo', 'Melee' ], [ 'Axe', 'Melee' ],[ 'Sniper', 'Ranged' ] ]

    var ranged = []
    var melee = []
    for(var i = 0; i < tampungArr.length; i++){
        if (tampungArr[i][1] === 'Ranged') {
            ranged.push(tampungArr[i][0])
        } else {
            melee.push(tampungArr[i][0])
        }
    }
    result.push(ranged)
    result.push(melee)
    return result;
}


// // ========== CARA LAIN dengan split ===========
// function meleeRangedGrouping (str) {
//     var result = []
//     if (str.length === 0) {
//         return result;
//     }
//     var splitStr = str.split(',');
//     // console.log(splitStr); // [ 'Razor-Ranged', 'Invoker-Ranged', 'Meepo-Melee', 'Axe-Melee', 'Sniper-Ranged' ]
//     var ranged = [];
//     var melee = [];
//     for(var i = 0; i < splitStr.length; i++){
//         var tampung = splitStr[i].split('-')
//         if (tampung[1] === 'Ranged') {
//             ranged.push(tampung[0])
//         } else {
//             melee.push(tampung[0])
//         }
//     }
//     result.push(ranged)
//     result.push(melee)
//     return result;
// }

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []