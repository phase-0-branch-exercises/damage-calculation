function attack (damage) {
  // Code disini
  return damage - 2
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  if (damagePerAttack === String(damagePerAttack) || numberOfAttacks === String(numberOfAttacks)) {
    return 'Functions will only accept input of number(s)'
  }
  else if (isNaN(damagePerAttack) || isNaN(numberOfAttacks) ) {
    return 'Please recheck your input'
  }
  return numberOfAttacks * attack(damagePerAttack)
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
