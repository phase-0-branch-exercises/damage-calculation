function attack (damage) {
    // Code disini
    var damagePerAttack = damage - 2;
    return damagePerAttack;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    output = attack(damagePerAttack) * numberOfAttacks
  
    return output;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90