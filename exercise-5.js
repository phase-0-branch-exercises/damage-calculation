function attack (damage) {
  return damage - 2;
  // Code disini
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  var damage = damagePerAttack;
  var hasil = attack(damage);
  var jumlah = 0;

  for (var i = 0; i <= numberOfAttacks - 1; i++) {
    jumlah = jumlah + hasil;
  }
  return jumlah;
  // Code disini
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90