const categories = document.querySelectorAll('#categories .item');

console.log(`В списке ${categories.length} категории.`);

categories.forEach(category =>
  console.log(
    `Категория: ${category.querySelector('h2').textContent}\nКоличество элементов: ${
      category.querySelectorAll('li').length
    }`,
  ),
);
