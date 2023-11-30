const myfam = ['Mosaref','Bilis','Taskin']

for (const name of myfam) {
    // console.log(name);
}

const number = [1,2,3,4,5,6,7,8,9,10]

for (const num of number) {
    //console.log(num);
}

const str = "Mosaref paik"

for (const name of str) {
    if (name===" ") {
        // console.log("Space detected");
        continue
    }
    // console.log(name);
}
//  for in loop 

const myobj = {
    name: 'Mosaref',
    age: 22,
    sub: "Secince",
}

for (const key in myobj) {
    // console.log(`${key} : ${myobj[key]}`);
}

// result 
// name : Mosaref
// age : 22
// sub : Secince

// array.forEach(element => {
    
// });
const myarry =['Mosaref','Mokadesh','Mofassel','Mariful']

myarry.forEach( (val) => {
    // console.log(val);
} )

let listarry = [
    {
        Name:"Mosaref",
        Age: 22 ,
        vill: "Uttarabad"
    },
    {
        Name:"Bilkis",
        Age: 20 ,
        vill: "Jamalpur"
    },
    {
        Name:"Mofassel",
        Age: 25 ,
        vill: "Kolkata"
    },
    {
        Name:"Mokadesh",
        Age: 32 ,
        vill: "Santoshpur"
    },
]

listarry.forEach( (val) => {
    // console.log(val.Name);
} )

listarry.forEach( (val) => {
    console.log(val.vill);
} )

