console.log('Exersice 5 - Damage Calculation \n');

function attack(damage) {
    return damage - 2;
}

function damageCalculation(numberOfAttacks,damagePerAttack) {
    
    var sum = 0;
    for(var i = 0;i<numberOfAttacks;i++){
        sum = sum + attack(damagePerAttack);
    }
    return sum;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90