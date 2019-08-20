function changeVocals (huruf) {
    var output = ''
    for(var i=0;i<huruf.length;i++){
        if(huruf[i]==='a'||huruf[i]==='i'||huruf[i]==='u'||huruf[i]==='e'||huruf[i]==='o'){
            output+=String.fromCharCode(huruf.charCodeAt(i)+1)
        }else if(huruf[i]==='A'||huruf[i]==='I'||huruf[i]==='U'||huruf[i]==='E'||huruf[i]==='O'){
            output+=String.fromCharCode(huruf.charCodeAt(i)+1)
        }else{
            output+=huruf[i]
        }  
    }
    return output
}

function reverseWord (str) {
    var tampung = changeVocals(str)
    var pembalik = tampung.split('').reverse().join('')
    return pembalik
}

function setLowerUpperCase (str) {
    var tampung = ''
    var output = reverseWord(str)
    for(var j=0;j<output.length;j++){
        if(output.charCodeAt(j)>=97 && output.charCodeAt(j)<=122){
            tampung += output[j].toUpperCase()
        }else if(output.charCodeAt(j)>=65 && output.charCodeAt(j)<=90){
            tampung += output[j].toLowerCase()
        }
    }
    return tampung
}

function removeSpaces (str) {
    var withoutSpaces = setLowerUpperCase(str)
    return withoutSpaces.split(' ').join('')
}

function passwordGenerator (name) {
    if(name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return removeSpaces(name)
}
console.log(passwordGenerator('Sergei Dragunov')); 
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex'));