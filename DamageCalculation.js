function attack (damage) {
    var damageCount = 2
    var totalDamage = damage - 2
    return totalDamage
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var sisaAttack = numberOfAttacks
    if (numberOfAttacks === 0) {
        return 1
    } else if (sisaAttack < numberOfAttacks) {
         sisaAttack -= 1
    }
   return sisaAttack * attack(damagePerAttack) 
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90