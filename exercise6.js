function meleeRangedGrouping (str) {
    //your code here
    let hasil = []
    let splitStr = str.split(',')
    if(str.length===0){
        return hasil
    }

    let arrSplit = []
    for(let i=0; i<splitStr.length; i++){
        arrSplit.push(splitStr[i].split('-'))
    }

    let tempRanged = []
    let tempMelee = []
    for(let i=0; i<arrSplit.length; i++){
        if(arrSplit[i][1]=='Ranged'){
            tempRanged.push(arrSplit[i][0])
        }else if(arrSplit[i][1]=='Melee'){
            tempMelee.push(arrSplit[i][0])
        }
    }
    hasil = [tempRanged,tempMelee]

    return hasil
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []