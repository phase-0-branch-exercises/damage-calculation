function attack (damage) {

    var damageReduction = 2;
    var damageDealt = damage - damageReduction;
  
    return damageDealt;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
  
    var damageDealt = attack(damagePerAttack);
    var totalDamage = damageDealt * numberOfAttacks;
    
    return totalDamage;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90