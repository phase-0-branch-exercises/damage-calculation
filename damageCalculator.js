function attack (damage) {
    // Code disini
    var b = damage - 2;
    return b;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var t = attack(damagePerAttack)
    var a = numberOfAttacks * t;
  
    return a
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90