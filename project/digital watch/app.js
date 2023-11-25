const watch = document.getElementById('watch')

// let digitalWatch = new Date().toLocaleTimeString

// console.log(digitalWatch);

// setInterval(digitalWatch )

setInterval((e) => {
    let digitalWatch = new Date()
    watch.innerHTML= digitalWatch.toLocaleString()
}, 1000);