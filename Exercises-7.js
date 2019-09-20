function meleeRangedGrouping(str) {
  //your code here
  var output = []
  var temp = ''

  for (var i = 0; i < str.length; i++) {
    if (str[i] != '-' && str[i] != ',') {
      temp += str[i]
    } else if (str[i] == '-' || str[i] == ',') {
      output.push(temp)
      temp = ''

    }
  }
  output.push(temp)
  // console.log(output);
  // return output

  var result = [
    [],
    []
  ]

  for (var j = 0; j < output.length; j++) {
    if (output[j + 1] == 'Ranged') {
      result[0].push(output[j])
    } else if (output[j + 1] == 'Melee') {
      result[1].push(output[j])
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