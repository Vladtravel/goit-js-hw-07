const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ulElement = document.querySelector('#ingredients');

const liElement1 = document.createElement('li');
liElement1.textContent = 'Картошка';

const liElement2 = document.createElement('li');
liElement2.textContent = 'Грибы';

const liElement3 = document.createElement('li');
liElement3.textContent = 'Чеснок';

const liElement4 = document.createElement('li');
liElement4.textContent = 'Помидоры';

const liElement5 = document.createElement('li');
liElement5.textContent = 'Зелень';

const liElement6 = document.createElement('li');
liElement6.textContent = 'Приправы';

ulElement.append(liElement1, liElement2, liElement3, liElement4, liElement5, liElement6);

console.log(ulElement);
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
