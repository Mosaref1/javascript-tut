const myli = document.getElementsByClassName("li_box");

const changeli = Array.from(myli);

changeli.forEach( function (li) {
    li.style.color='red';
    li.style.dispaly='inline'
})


const creatediv = document.createElement('div');

creatediv.className='new_div';
creatediv.id='mainId'
creatediv.style.backgroundColor='green'
creatediv.innerText='Mosaref paik'
creatediv.style.padding='20px'
creatediv.style.height='300px'
creatediv.style.textAlign='center'



document.body.appendChild(creatediv)
console.log(creatediv);
