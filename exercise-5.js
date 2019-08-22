function attack (damage) {
    var wounds = damage - 2
    
    return wounds
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    
    var calculate = numberOfAttacks * attack(damagePerAttack)
    
    return calculate
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90