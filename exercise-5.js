function attack (damage) {
    let dpa = damage - 2
    return dpa
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var dmg = attack(damagePerAttack)
    return dmg * numberOfAttacks
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90