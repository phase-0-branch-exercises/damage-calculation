function meleeRangedGrouping (str) {
    //your code here
    var array = str.split(",");
    var rangedArray = [];
    var meleeArray = [];
    var result =[];
    if(str!==""){
        for(var i = 0; i<array.length;i++){
            var member =  array[i].split("-");
            if(member[1] === "Ranged"){
                rangedArray.push(member[0]);
            }else if (member[1] === "Melee"){
                meleeArray.push(member[0])
            }  
        }
        result.push(rangedArray,meleeArray);
    }
    return result; 
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []