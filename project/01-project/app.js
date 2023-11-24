const body = document.querySelector("body");
const box = document.querySelectorAll(".box");

// console.log(box);
box.forEach(function (box) {
    box.addEventListener("click", function (e) {
        if (e.target.id ==='red') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id === 'grey') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor=e.target.id
        }
    })

})


