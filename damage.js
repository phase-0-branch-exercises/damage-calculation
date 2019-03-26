function attack (damage) {
    // Code disini
    var a=0;
    a=damage-2;
    return a;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var a=numberOfAttacks*attack(damagePerAttack);
    return a
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90