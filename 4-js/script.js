function fullName(fName,Lname){
    // console.log(fName,Lname);
}

fullName("Mosaref","Paik")
let maxVal = Number.MAX_SAFE_INTEGER;
// console.log(maxVal);
let minVal = Number.MIN_SAFE_INTEGER;
// console.log(minVal);

// let integer = Number.isInteger(12.6)
let integer = Number.isSafeInteger(32)
// console.log(integer);

let bankbal = 7.787
let newbal = 87.907
// console.log(bankbal);
newbal.toFixed()
bankbal.toFixed()
// console.log(bankbal + newbal);

let num1 = Number.parseInt("23 year")

// console.log(num1);

let maxV = Number.MAX_VALUE;

// console.log(maxV);
let x = Number.EPSILON
// console.log(x);

let myra = Array.from("abcdefghijk")

// console.log(myra.length);

let word = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
const rester = word.replaceAll(' ', '')
// console.log(rester);
console.log(rester.length);

// next day https://www.w3schools.com/js/js_string_methods.asp

function change_para(){
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerText = "hello Mosaref paik"
    document.body.style.backgroundColor="red"
}
function change_para2(){
    document.body.style.backgroundColor="green"
}
function change_para3(){
    document.body.style.backgroundColor="blue"
}








