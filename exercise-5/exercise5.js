function attack (damage) {
    var  attacks = damage - 2
    return attacks
  }
  
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var totalDamage = attack(damagePerAttack) * numberOfAttacks
    return totalDamage
  }
  
//   TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90