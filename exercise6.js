function meleeRangedGrouping (str) {
  //your code here
  var arr = [];
  var arrRanged = []
  var arrMelee = []
  var temp = ''
  for (var i=0; i<str.length; i++){
    if (str[i] == '-' || str[i] == ',' || i == str.length-1){
      arr.push(temp)
      temp = ''
    }else{
      temp += str[i]
    }
  }

  for (var j=0; j<arr.length; j+=2){
    if(arr[j+1] == 'Ranged'){
      arrRanged.push(arr[j])
    }else if(arr[j+1] == 'Melee'){
      arrMelee.push(arr[j])
    }
  }

  var luaran = []
  luaran.push(arrRanged, arrMelee)

  if(luaran[0].length < 1){
    return '[]';
  }else{
  return luaran;
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []