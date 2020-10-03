const counterEl = document.querySelector('#value');
const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');

let counterValue = Number(counterEl.textContent);

const increment = () => {
  counterEl.textContent = counterValue += 1;
};

const decrement = () => {
  counterEl.textContent = counterValue -= 1;
};

incrementEl.addEventListener('click', increment);
decrementEl.addEventListener('click', decrement);
