const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value');

let counterValue = 0;

btnIncrement.addEventListener('click', () => {
  increment();
  counter.textContent = counterValue;
});

btnDecrement.addEventListener('click', () => {
  decrement();

  counter.textContent = counterValue;
});

function increment() {
  counterValue += 1;
}

function decrement() {
  counterValue -= 1;
}
