function attack(kehancuranDamage) {
    // Code disini
    var result = kehancuranDamage - 2
    return result
  }
  
  function damageCalculation(numberOfAttacks, damagePerAttack) {
    // Code disini
    var result = 0
    for(var i = 0; i < numberOfAttacks; i++){
        //console.log(i);
        
        if(i <= numberOfAttacks) { 
            result = result + attack(damagePerAttack)
        }
    }
    return result
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90
  