// function mengurangi damage
function attack (damage) {
    return  damage - 2
}
// akhir function mengurangi damage

// function untuk menghitung total damage
function damageCalculation (numberOfAttacks, damagePerAttack) {
    return numberOfAttacks * attack(damagePerAttack)
}
  
  // TEST CASE
console.log(damageCalculation(9, 25)); // 207
  
console.log(damageCalculation(10, 4)); // 20
  
console.log(damageCalculation(5, 20)); // 90