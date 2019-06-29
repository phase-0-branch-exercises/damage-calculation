function totalDigitRekursif(angka) {

  if (angka <= 9) {
    return angka;
  } else if (angka > 9) {
    let end = String(angka)[String(angka).length - 1];
    return parseInt(end) + totalDigitRekursif(parseInt(angka/10));
  }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5