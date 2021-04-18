const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

inputEl.addEventListener('change', spanChange);

function spanChange(event) {
  spanEl.style.fontSize = inputEl.value + 'px';
}
