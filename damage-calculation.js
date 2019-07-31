
/**
 * Function takes in parameter damage, damage is decreased by 2
 * @param {*} damage int
 */
function attack (damage) {
    damage = damage - 2;
    return damage;
  }
  
  /**
 * Function takes in two parameters: numberOfAttacks and damagePerAttack
 * Damage is equal to numberOfAttacks times damagePerAttack
 * However for every attack launched the damage is decreased by 2 points
 * 
 * @param {*} numberOfAttacks int
 * @param {*} damagePerAttack int
 */
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var damage = numberOfAttacks * damagePerAttack;
    while (numberOfAttacks > 0){
        damage = attack(damage);
        numberOfAttacks--;
    }
    return damage;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90