function setusername(username){
    this.username = username;
    console.log("Called");
}

function createuserid(username,email,password){
    // use call() mathods 
    setusername.call(this,username);
    this.email = email;
    this.password = password;
};

const alluser = new createuserid("Mosaref","mosaref76@gmail.com","123456");
console.log(alluser);





