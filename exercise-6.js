function meleeRangedGrouping (str) {
    var pisahinKoma = pisahKoma(str);
    var arr2 = [];
    var a = 0;
    
    if (str === ''){
        return "// []"
    }
    for(var m = 0; m < pisahinKoma.length; m++){
        arr2.push(pisahStrip(pisahinKoma[m]));
    }
   
    var range = [];
    var meele = [];
    var arr3 = [range, meele]
   
    for(var n = 0; n < arr2.length; n++){
        if(arr2[n][1] === 'Ranged'){
            range.push(arr2[n][0])
        } else if (arr2[n][1] === 'Melee'){
            meele.push(arr2[n][0])
        }
    }
    // console.log(range);
    return arr3;

  }

function pisahStrip(kata) {
    var arr = []
    var kataBaru = ''
    
    for(var m = 0; m < kata.length; m++){
        if(kata[m] === '-'){
            arr.push(kataBaru);
            kataBaru = '';
        } else {
            kataBaru = kataBaru + kata[m];
        } 
        if(m === kata.length - 1){
            arr.push(kataBaru);
        }
    }
    return arr;
}

function pisahKoma (kata) {
    var arr = []
    var kataBaru = ''
    
    for(var m = 0; m < kata.length; m++){
        if(kata[m] === ','){
            arr.push(kataBaru);
            kataBaru = '';
        } else {
            kataBaru = kataBaru + kata[m];
        }         
        if(m === kata.length - 1){
            arr.push(kataBaru);
        }
        
    }
    return arr;
}
  // TEST CASE
    
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []