function totalDigitRekursif(angka){
    if(angka.toString() === ''){
        return ''
    }else{
        return Number(angka.toString()[0])+Number(totalDigitRekursif(angka.toString().slice(1)))
    }
}


console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5