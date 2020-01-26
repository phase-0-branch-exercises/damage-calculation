function attack (damage) {
    // Code disini
    // console.log(damage)
    return damage - 2
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    
    var hasil = numberOfAttacks * attack(damagePerAttack)
    // return result = numberOfAttacks * aturan 
    
    return hasil
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  console.log(damageCalculation(10, 4)); // 20
  console.log(damageCalculation(5, 20)); // 90