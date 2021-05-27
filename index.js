document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  })

  const buttonStop = document.querySelector("#stopButton")
  const buttonSlow = document.querySelector("#slowButton")
  const buttonGo = document.querySelector("#goButton")
  const button = document.querySelectorAll(".button")
  const bulb = document.querySelectorAll(".bulb")


  var lightStop = document.querySelector("#stopLight")
  var lightSlow = document.querySelector("#slowLight")
  var lightGo = document.querySelector("#goLight")

  buttonStop.addEventListener("click", () => {
    lightStop.classList.toggle(`stop`)
  });

  buttonSlow.addEventListener("click", () => {
    lightSlow.classList.toggle('slow')
  })

  buttonGo.addEventListener("click", () => {
    lightGo.classList.toggle(`go`);
  });

  / Log what button is being entered by mouse
  button.forEach(button => {
    button.addEventListener("mouseenter", (event) => {
        console.log(`Entered ${event.target.innerHTML} button`)
      });
  })

  button.forEach(button => {
    button.addEventListener("mouseleave", (event) => {
        console.log(`Left ${event.target.innerHTML} button`)
      });
  })

  /// Log what button is on or off

  bulb.forEach(bulb => {
    button.forEach(button => {
      button.addEventListener("click", (event) => {

        var goClicked = document.getElementsByClassName('go');
        if (goClicked.length > 0) {
          console.log(`Go bulb on`)
        } else {
          console.log(`Go bulb off`)
        }

        var slowClicked = document.getElementsByClassName('slow');
        if (slowClicked.length > 0) {
          console.log(`Slow bulb on`)
        }else {
          console.log(`Slow bulb off`)
        }

        var stopClicked = document.getElementsByClassName('stop');
        if (stopClicked.length > 0) {
          console.log(`Stop bulb on`)
        }else {
          console.log(`Stop bulb off`)
        }
      })
    })
  })






