const listEl = document.querySelector('ul#categories');

const quantity = listEl.children.length;
console.log(`Колличество категорий в списке: ${quantity}`);

const listItemsEl = Array.from(document.querySelectorAll('.item'));

for (const item of listItemsEl) {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
}
