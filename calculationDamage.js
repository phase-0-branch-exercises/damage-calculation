function attack (damage) {
    // Code disini
    const damageReduction = 2;
    var damageDealt = damage - damageReduction;
    
    return damageDealt;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    /* Cara rekursif
  var attacksRemaining = numberOfAttacks;
  
  if (numberOfAttacks === 0) {
    return 1;
  } else if (attacksRemaining < numberOfAttacks) {
    attacksRemaining -= 1;
  }
  
  return attacksRemaining * attack(damagePerAttack);
  */
  
  // Cara biasa
  var damageDealt = attack(damagePerAttack);
  var totalDamage = damageDealt * numberOfAttacks;
  
  return totalDamage;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  console.log(damageCalculation(10, 4)); // 20
  console.log(damageCalculation(5, 20)); // 90