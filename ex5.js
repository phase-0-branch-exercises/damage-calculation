function attack (damage) {
    // Code disini
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var damage = damagePerAttack -2;
    return numberOfAttacks * damage;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90
  