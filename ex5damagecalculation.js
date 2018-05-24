function attack (damage) {
    var hit = damage - 2;
    return hit;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
      var damageReceived = attack(damagePerAttack);
      return damageReceived * numberOfAttacks;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90