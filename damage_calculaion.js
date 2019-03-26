function attack (damage) {
    // Code disini
    var calculateDamage1=damage-2;//setiap damagePerAttack dikurangi 2
    return calculateDamage1;
    // return damage-2;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var calculatedamage2=attack(damagePerAttack)*numberOfAttacks;
    return calculatedamage2;
    // return attack(damagePerAttack)*numberOfAttacks;
    
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90