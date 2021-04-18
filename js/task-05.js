// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector('#name-input');

const titleEl = document.querySelector('#name-output');

const refs = {
  input: document.querySelector('#name-input'),
  title: document.querySelector('#name-output'),
};

// refs.input.addEventListener('focus', oninputFocus);
// refs.input.addEventListener('blur', oninputBlur);
// refs.input.addEventListener('change', oninputChange);
refs.input.addEventListener('input', oninputInput);

// function oninputFocus(event) {
//   console.log('инпут получил фокус');
//   titleEl.textContent = event.currentTarget.textContent;
// }

// function oninputBlur(event) {
//   console.log('потерял фокус');
//   titleEl.textContent = 'незнакомец';
// }

// function oninputChange(event) {
//   console.log(event.currentTarget.value);
// }

function oninputInput(event) {
  titleEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    titleEl.textContent = 'незнакомец';
  }
}
