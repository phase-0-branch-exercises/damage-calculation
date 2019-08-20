function makanTerusRekursif(waktu){
    var pengurang = 15
    var count = 1
    if(waktu<=0){
        return count -1
    }else{
        return (count + makanTerusRekursif(waktu-pengurang))
    }
}
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0