import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';

const delay = document.querySelector("[delay]");
const step = document.querySelector("[step]");
const amount = document.querySelector("[amount]");
const bnt = document.querySelector("")


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
