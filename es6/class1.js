class myFam{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    family(){
        return console.log(`My name is ${this.name} age is ${this.age}`);
    }
}

const famName = new myFam("Mosaref",23)
famName.family()





