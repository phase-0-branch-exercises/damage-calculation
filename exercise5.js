function attack (damage) {
    var pengurang = damage - 2
    return pengurang
  }
  
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var finalAttack = attack(damagePerAttack)
    var akumulasi = numberOfAttacks * finalAttack
    return akumulasi
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90