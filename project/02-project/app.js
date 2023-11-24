const form = document.querySelector('form')

form.addEventListener('submit',function (e) {
    e.preventDefault;

    const height = parseInt(document.querySelector('#height'))
    const wight = parseInt(document.querySelector('#weight'))
    const result = document.querySelector("#Result")


    if (height === "" || height < 0 || isNaN(height)){
        result.innerHTML=`plase give vile number ${height}`
    }
    // result.innerHTML=`$(height)`
})
 

