const totalItems = document.querySelectorAll('#categories .item');

console.log(`В списке ${totalItems.length} категории.`);

const categories = document.querySelectorAll('#categories .item');

categories.forEach(category =>
  console.log(
    `Категория: ${category.querySelector('h2').textContent}\nКоличество элементов: ${
      category.querySelectorAll('li').length
    }`,
  ),
);
