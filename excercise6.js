function attack(damage){
    damage = damage - 2   
    return damage
}


function damageCalculation(numberOfAttacks, damagePerAttack){
    damage = attack(damagePerAttack)
    return numberOfAttacks * damage
}
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90