// let objj = {
//     name: 'Mosaref',
//     age: 23,
//     year: 2023,
//     class: "12th",
// }
// console.log(objj.name);
// console.log(objj.year);


const promeisOne = new Promise(function(resolve, reject){
    // Do an async task 
    // DB calls 
    setTimeout(function(){
        console.log('one task completed');
        resolve()
    },1000)
})
promeisOne.then(function(){
    console.log('one promise consume');
})

