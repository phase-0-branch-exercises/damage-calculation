function attack (damage) {
    let totalDamage = damage - 2
    return totalDamage
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    let damages = attack(damagePerAttack)
    let totalDamage = numberOfAttacks * damages

    return totalDamage

  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90