function attack (damage) {
    // Code disini
    var damageAtt = damage - 2
    return damageAtt
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var damageAtt = attack(damagePerAttack)
    var damageCal = numberOfAttacks * damageAtt
    return damageCal
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90