function attack(damage) {
    var realDamage = damage - 2
    return realDamage
  }
  
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
  var damage = damagePerAttack
  var realDamage = attack(damage)
    return numberOfAttacks * realDamage
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90