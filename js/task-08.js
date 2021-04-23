const controlEl = document.querySelector('#controls');

const btnRender = document.querySelector('[data-action="render"]');
console.log(btnRender);

const btndestroy = document.querySelector('[data-action="destroy"]');
console.log(btndestroy);

const divElbox = document.querySelector('#boxes');

btnRender.addEventListener('click', onRender);

btndestroy.addEventListener('click', removeBoxes);

function onRender(event) {
  let amount = event.path[1].children[0].value;
  createBoxes(amount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box1');
    divElbox.append(newDiv);
  }

  console.dir(divElbox);
  console.log(`Колличество кубиков: ${amount}`);
}

function removeBoxes(amount) {
  divElbox.replaceWith('');
}
