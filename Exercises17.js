function kaliTerusRekursif(angka){
    if(angka<10){
        return angka
    }else{
        return kaliTerusRekursif(Number([...angka.toString()].reduce(function (a,b){return a*b})))
    }
}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
console.log(kaliTerusRekursif(39)); // 4