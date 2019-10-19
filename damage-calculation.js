function attack (damage) {
    var serangan = damage - 2
    return serangan
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var totalSerangan = attack(damagePerAttack) * numberOfAttacks
    return totalSerangan
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90