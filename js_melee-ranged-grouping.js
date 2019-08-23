function seperate(str, seperator) {
	var arr_temp = []
	var x = ''
	for (var i = 0; i < str.length; i++) {
		if (str[i] === seperator){
			arr_temp.push(x)
			x = ''
		} else {
		x = x + str[i]
		}

	}
  arr_temp.push(x)
  
  return arr_temp
}

function meleeRangedGrouping (str) {
    //your code here
    var arr_group = ['melee', 'ranged']
    var arr_1 = seperate(str,',')

    if (str.length === 0) {
        return []
    }

    var arr_2 = []
    for (var i = 0; i < arr_1.length; i++) {
        var x = seperate(arr_1[i], '-')
        arr_2.push(x)
    }

    var result = []
    for (var i = 0; i < arr_group.length; i++) {
        result.push([])
    }

    for (var i = 0; i < arr_2.length; i++) {
        if (arr_2[i][1] === 'Ranged') {
            result[0].push(arr_2[i][0])
        } else if (arr_2[i][1] === 'Melee') {
            result[1].push(arr_2[i][0])
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