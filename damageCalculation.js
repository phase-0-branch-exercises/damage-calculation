function attack (damage) {
    // Code disini
    var totalAttack = damage - 2
    return totalAttack
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var finalAttack = attack(damagePerAttack) * numberOfAttacks
    return finalAttack
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90