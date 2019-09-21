function meleeRangedGrouping (str) {
    if(str.length === 0){
        return []
    }
    //your code here
    var tmp = ""
    var hero = []
    var final = []
for(i=0;i < str.length; i++){
    if(str[i] === "-" ){
        hero.push(tmp)
        tmp = ""
    }else if(str[i] === ","){
        hero.push(tmp)
        tmp = ""
        final.push(hero)
        hero = []
    }else{
        tmp += str[i]
    }
    if(i === str.length -1){
        hero.push(tmp)
        tmp = ""
        final.push(hero)
        hero = []
    }
}
var result = [[],[]]
    //console.log(final)
    for(i=0; i < final.length;i++){
        //console.log(final[i])
        if(final[i][1] === "Ranged"){
            result[0].push(final[i][0])
        }else{
            result[1].push(final[i][0])
        }
    }
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []