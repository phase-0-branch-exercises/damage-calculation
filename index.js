function attack (damage) {
    var final = damageCalculation(damage)
    return final
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    damagePerAttack -= 2
    var att = numberOfAttacks * damagePerAttack

    return att
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90