import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';


const form = document.querySelector(".form");



function createPromise(position, delay) {
  // const shouldResolve = Math.random() > 0.3;
  // if (shouldResolve) {
  //   return new Promise((resolve, reject) => {
  //     console.log(' dolgo dolgo shitaesh');
  //     resolve({position, delay});
  //   });
  // } else {
  //   return new Promise((resolve, reject) => {
  //     console.log(' dolgo dolgo shitaesh');
  //     reject({ position, delay });
  //   });
  // }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);

  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // debugger;

  const data = new FormData(form);
  const delay = parseInt(data.get("delay"));
  const step = parseInt(data.get("step"));
  const amount = parseInt(data.get("amount"));
  // console.log(delay, step, amount);

  for (let i = 0; i < amount; i++) {
    createPromise(i, delay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { timeout: 5000 });
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { timeout: 5000 });
      });
  }
});






