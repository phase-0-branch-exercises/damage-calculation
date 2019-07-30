const attack = damage => damage-2;
const damageCalculation = (numberOfAttacks, damagePerAttack) => numberOfAttacks !== 0 ? attack(damagePerAttack) + damageCalculation(numberOfAttacks-1, damagePerAttack) : 0;

// TEST CASE
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20
console.log(damageCalculation(5, 20)); // 90