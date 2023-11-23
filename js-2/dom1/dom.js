// let head_1 = document.getElementById("head_1");

// head_1.style.backgroundColor="red";

// const sc_heading = document.querySelector(".sc_heading")

const mp = document.getElementById("mp");

document.getElementById("bh").innerHTML="new heading add " + mp.innerHTML;

// mp.style.height="300px";
mp.style.backgroundColor="green";
mp.style.textAlign="center";
mp.style.paddingTop="10px"
mp.style.color="#fff"

const btn_1 = document.querySelector("input[type=button]")

btn_1.style.backgroundColor='red';
// btn_1.innerHTML="hello mosarec"

const changeul = document.querySelector("ul")
const clicolor = changeul.querySelector("li")

// clicolor.style.backgroundColor="orange"
// clicolor.style.padding='20px'

// clicolor.innerText="MOSAREF PAIK"

const changeli = document.querySelectorAll("li")

changeli.forEach(function (l){
    l.style.backgroundColor='green';
    l.style.display='inline';
    l.style.padding='20px'

})

// changeli.style.listStyle='none'
// changeli[3].style.backgroundColor='red'
// changeli[3].style.color='g'










