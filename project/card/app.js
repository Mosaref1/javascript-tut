let friend = document.querySelector('h4')
let addfriend = document.querySelector('.addf')
// let removefriend = document.querySelector('.remove')
let click1 = 0

addfriend.addEventListener('click', function (e){
    if (click1 == 0) {
        friend.innerHTML='Friend'
        friend.style.color='blue'
        addfriend.innerHTML='Remove Friend'
        addfriend.style.backgroundColor='red'

        click1 =1
    }else{
        friend.innerHTML='Unfriend';
        friend.style.color='red'
        addfriend.innerHTML='Friend'
        addfriend.style.backgroundColor='blue'
        click1 = 0
    }
})  
// removefriend.addEventListener('click', function(e) {
//     friend.innerHTML='Unfriend'
//     friend.style.color='red'
// })
