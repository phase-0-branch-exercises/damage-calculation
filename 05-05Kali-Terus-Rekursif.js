function kaliTerusRekursif(angka) {
  if (angka <= 9) {
    return angka;
  } else {
    let result = parseInt(angka.toString()[angka.toString().length - 1]) * kaliTerusRekursif(parseInt(angka/10));
    return result.toString()[result.toString().length - 1];
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 6
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6