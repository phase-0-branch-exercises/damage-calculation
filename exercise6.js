function meleeRangedGrouping (str) {
    //your code here
    var hasil = [[],[]]
    var tampung = str.split(',')
    for(let i = 0; i < tampung.length; i++){
        let splitStrip = tampung[i].split('-')
        if(splitStrip[1] === 'Ranged'){
            hasil[0].push(splitStrip[0])
        } else {
            hasil[1].push(splitStrip[0])
        }
    }
    if(str.length === 0){
        return []
    } else {
        return hasil
    }
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []