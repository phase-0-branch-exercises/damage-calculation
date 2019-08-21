function meleeRangedGrouping (str) {
    if(str === '') {
        return [];
    }
    var splitComma = splitByComma(str);
    var splitDash = splitByDash(splitComma);
    var output = {
        ranged: [],
        melee: []
    }

    for(var i = 0; i < splitDash.length; i++) {
        if(splitDash[i][1] === 'Ranged') {
            output.ranged.push(splitDash[i][0]);
        } else if(splitDash[i][1] === 'Melee') {
            output.melee.push(splitDash[i][0]);
        }
    }
    return [output.ranged, output.melee];
}

function splitByComma(data) {
    var splitByComma = [];
    var word = '';

    for(var i = 0; i < data.length; i++) {
        if(data[i] === ",") {
            splitByComma.push(word);
            word = '';
        } else {
            word = word + data[i];
        }
    }
   splitByComma.push(word);
   return splitByComma;
}

function splitByDash(data) {
    var splitByDash = [];
    var word = '';
    var wordArr = [];

    for(var i = 0; i < data.length; i++) {
        for(var j = 0; j < data[i].length; j++) {
            if(data[i][j] === '-') {
                wordArr.push(word);
                word = '';
            } else {
                word = word + data[i][j];
            }
        }
        wordArr.push(word);
        splitByDash.push(wordArr);
        word = '';
        wordArr = [];
    }
    return splitByDash;
}

  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []