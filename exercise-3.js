function attack (damage) {
    // Code disini
    let result  = damage * 2
    return result
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    let numAttack = attack(numberOfAttacks)
    let damageAttack = damagePerAttack * numberOfAttacks
    let result = damageAttack - numAttack

    return result
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90