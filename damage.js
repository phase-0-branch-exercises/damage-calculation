function attack (damage) {
    return damage-2
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var result=0;
    for(var i=numberOfAttacks; i>0 ;i--){
      result += attack(damagePerAttack)
    }
    return result
     
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90