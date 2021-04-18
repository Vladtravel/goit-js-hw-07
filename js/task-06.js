const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('change', oninputChange);

function oninputChange(event) {
  const lengthNum = Number(event.currentTarget.dataset.length);

  if (lengthNum === event.currentTarget.value.length) {
    inputEl.classList.add('valid');
    console.log('Добро пожаловать');
    return;
  } else inputEl.classList.add('invalid');
  console.log('Неверное колличество символов');
}
