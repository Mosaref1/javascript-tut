const myli = document.getElementsByClassName("li_box");

const changeli = Array.from(myli);

changeli.forEach( function (li) {
    li.style.color='red';
    li.style.dispaly='inline'
})
   