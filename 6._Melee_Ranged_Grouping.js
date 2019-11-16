function meleeRangedGrouping (str) {
    var hasil = []
    var string = ''
    for(let i = 0; i <= str.length; i++){
        if( str[i]  === ',' || str[i] === '-' || i == str.length){
            hasil.push(string)
            string = ''
        }else{
            string += str[i]
        }
    }
    var heroK = [[],[]]
    for(let i = 0; i < hasil.length; i++){
        if(i%2== 1){
            if(hasil[i] === 'Ranged'){
                heroK[0].push(hasil[i-1])
            }
            else{
                heroK[1].push(hasil[i-1])
            }
        }
    }
    return heroK
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []