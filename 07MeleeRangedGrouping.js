function meleeRangedGrouping (str) {
  //your code here
  var hasil = [];

  if (str != '') {
    hasil.push([]);
    hasil.push([]);
  
    var kata1 = '';
    var kata2 = '';
    var flag = false;
    
    for (var i=0; i < str.length; i++) {
      if (str[i] != '-' && str[i] != ',' && flag === false) kata1+= str[i];
      else if (str[i] === '-' && flag === false) flag = true;
      else if (str[i] != '-' && str[i] != ',' && flag === true) {
          kata2 += str[i];
          if (i === str.length - 1)  hasil = pushData(kata1, kata2, hasil);
      } else if (str[i] === ',' && flag === true) {
          hasil = pushData(kata1, kata2, hasil);
          kata1 = '';
          kata2 = '';
          flag = false;
      }
    }
  } 

  return hasil;  
}

function pushData(kata1, kata2, hasil){
    if (kata2 === 'Melee') hasil[1].push(kata1);
    else hasil[0].push(kata1);

    return hasil;
}


// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []