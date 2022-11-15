const body= document.querySelector('body');
const bodyBgColor = document.querySelector('.color');
const changeColorBtnStart = document.querySelector('[data-start]');
const changeColorBtnStop = document.querySelector('[data-stop]');
let timerId = null;
// changeColorBtnStop.setAttribute("disabled", "disabled")
changeColorBtnStop.disabled=true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

 
changeColorBtnStart.addEventListener("click", () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
            }, 1000);
   changeColorBtnStart.disabled = true;
   changeColorBtnStop.disabled=false;
    // changeColorBtnStart.setAttribute("disabled", "disabled");
    // changeColorBtnStop.removeAttribute("disabled", "disabled")
     
  });

  changeColorBtnStop.addEventListener("click", () => {
    clearInterval(timerId);
    changeColorBtnStart.disabled = false;
    changeColorBtnStop.disabled=true; 
    // changeColorBtnStart.removeAttribute("disabled", "disabled");
    // changeColorBtnStop.setAttribute("disabled", "disabled")
      });