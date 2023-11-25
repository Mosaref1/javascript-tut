let time1 = document.querySelector('h2')
let start = document.querySelector('#start')
let stop1 = document.querySelector('#stop')

// time1.innerHTML='Mosaref paik is the coder'
let intervalId;

start.addEventListener("click", function() {
  // Create a new interval

  intervalId = setInterval(function(e) {
    // Do something every second
let intervalId;
    time1.innerHTML=`Hello Mosaref ${intervalId}`
    // console.log('hello Mosaref');
  }, 1000); // 1000 milliseconds = 1 second
});

// Add a click event listener to the stop button
stop1.addEventListener("click", function() {
  // Clear the interval
  clearInterval(intervalId);
});



