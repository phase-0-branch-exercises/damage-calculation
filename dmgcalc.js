function attack (damage) {
    
    jumlah = damage - 2
    return jumlah
  }
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    return numberOfAttacks * attack(damagePerAttack)
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90