const ulElement = document.querySelector('#ingredients');

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const liIngredients = ingredients.map(liIngredient => {
  const element = document.createElement('li');
  element.textContent = liIngredient;
  return element;
});
console.log(liIngredients);

ulElement.append(...liIngredients);
