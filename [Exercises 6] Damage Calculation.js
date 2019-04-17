function attack (damage) {
    return damage - 2
}
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var count = 0;
    if (numberOfAttacks === 0){
        return count;
    } else {
        count = attack (damagePerAttack)
        numberOfAttacks--;
    }
    return count + damageCalculation(numberOfAttacks, damagePerAttack)
}
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90