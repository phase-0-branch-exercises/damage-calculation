function attack (damage) {
	return damage - 2;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
	var totalDamage = 0;
	if(numberOfAttacks == 0) {
		return 0;
	} else {
		totalDamage += attack(damagePerAttack);
		numberOfAttacks--;
		return totalDamage + damageCalculation(numberOfAttacks, damagePerAttack);
	}
}

console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
