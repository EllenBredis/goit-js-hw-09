import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timerEl = document.querySelector(".timer");
  timerEl.style.display = "flex";
  timerEl.style.gap = "20px"
 
 const fieldEl = document.querySelectorAll(".field");
function fieldStyle() {
    for( let i = 0; i <fieldEl.length; i++){ 
    fieldEl[i].style.display = "flex"; 
    fieldEl[i].style.gap = "5px";
    fieldEl[i].style.flexDirection = "column";
    fieldEl[i].style.alignItems= "center";
    fieldEl[i].style.marginTop= "20px";
    fieldEl[i].style.textTransform="uppercase";
    fieldEl[i].style.fontSize="14px";
    }		
  }
   fieldStyle()
  console.log(fieldEl)

  const fieldValueStyle = document.querySelectorAll(".value");
  function valueStyle() {
    for( let i = 0; i <fieldValueStyle.length; i++){ 
        fieldValueStyle[i].style.fontSize = "30px";
        fieldValueStyle[i].style.fontWeight="600";
        }		
  }
  valueStyle()

const btnStart = document.querySelector('[data-start]');
const dateChoice = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMins = document.querySelector('[data-minutes]');
const dataSecs = document.querySelector('[data-seconds]');
console.log(dateChoice)

let timerId = null;
btnStart.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
            Notiflix.Notify.failure('Please choose a date in the future!');
            return;
          }
          if (selectedDates[0] > new Date()) {
            btnStart.disabled = false;
          }
          btnStart.addEventListener('click', () => {
            timerId= setInterval(() => {
              const differenceInTime = selectedDates[0] - new Date();
      
              if (differenceInTime < 1000) {
                clearInterval(timerId);
              }
              const result = convertMs(differenceInTime);
              viewTimer(result);
            }, 1000);
            btnStart.disabled = true;
          });
    },
  };
  flatpickr(dateChoice, options);
   
  function viewTimer({ days, hours, minutes, seconds }) {
    dataDays.textContent = `${days}`;
    dataHours.textContente = `${hours}`;
    dataMins.textContent = `${minutes}`;
    dataSecs.textContent = `${seconds}`;
  }
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  };
