const form = document.querySelector("form")



form.addEventListener('submit', function (e){
    e.preventDefault;

    let height =parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#Result");

    if (height==='' || height < 0 || isNaN(height)) {
        result.innerHTML='pls give vild number hight'
    } else if (weight==='' || weight < 0 || isNaN(weight)) {
        result.innerHTML=`pls vild weight ${weight}`
    } else {
        
    }
})


