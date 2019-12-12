//Logic Challenge: Damage Calculation
function attack (damage) {
	var attack = 2 * damage;
	return attack;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
	var damage = numberOfAttacks * damagePerAttack - attack(numberOfAttacks); 
	return damage;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20
console.log(damageCalculation(5, 20)); // 90