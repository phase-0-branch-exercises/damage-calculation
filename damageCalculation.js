function attack (damage) {
  // Code disini
  var damageReduced = 2
  return damage - damageReduced
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  //Conventional Way
  // var damageBaru = attack(damagePerAttack)
  // return numberOfAttacks * damageBaru
  //Recursive Way
  var attackRemain = numberOfAttacks //Creating variable to compare numberofattack and numberofattack-1
  if(numberOfAttacks === 0){
    return 1
  } else if(numberOfAttacks > attackRemain){
    numberOfAttacks -= 1
  }
  return numberOfAttacks * attack(damagePerAttack)
  
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90