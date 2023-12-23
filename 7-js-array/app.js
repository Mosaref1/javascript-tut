let array = ['apple','banana','coconut','pinaple'];

// console.log(array[2]);
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(`index ${i} and value is ${element}`);
}

for (const ele of array) {
    // console.log(ele);
}
for (const i in array) {
    // console.log(i);
}

let array2 = ['apple','banana','coconut','pinaple'];

let arr = array2

arr.push("green coconut")
// console.log(array2);
arr.unshift('Orange','blue apple')
// console.log(array2);

array2.shift()
// console.log(arr);
arr.pop()
// console.log(array2);


let fruits = [];
fruits[126] = "Apple";

// console.log(fruits.length);

let myarr = new Array("Mosaref","Taskin","bilkis")
// console.log(myarr);

let mynum =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// console.log(mynum);

console.log(mynum[1][2]);

// for (const i of mynum) {
//   console.log(i[2]);  
// }

