import Notiflix from 'notiflix';


const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const btnCreatePromise = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

btnCreatePromise.addEventListener('click',сreatePromises)

function сreatePromises(event) {
  event.preventDefault();
  const amountVal = Number(amount.value);
  let delayVal = Number(delay.value);
  let stepVal = Number(step.value);
  for (let i = 1; i <= amountVal; i++) {
    createPromise(i, delayVal)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${i} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${i} in ${delay}ms`
        );
      });
    delayVal += stepVal;
  }
}



