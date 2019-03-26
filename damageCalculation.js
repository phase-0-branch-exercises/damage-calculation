function attack (damage) {
  // Code disini
  if(damage<1){
      return 0
  }
  if(damage ==2){
    return 1
  }else{
  return damage-2
    }
  }

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini

  return numberOfAttacks * attack(damagePerAttack)
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90

console.log(damageCalculation(5, 2));