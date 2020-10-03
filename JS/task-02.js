const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeListFromArray = arr => {
  return arr.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  });
};
const elementsOfList = makeListFromArray(ingredients);

ingredientsEl.append(...elementsOfList);
