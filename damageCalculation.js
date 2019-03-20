function attack (damage) {
    // Code disini
    output = damage - 2

    return output
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    output = numberOfAttacks * attack(damagePerAttack)

    return output
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90