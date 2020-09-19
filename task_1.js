// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
const categoriesRef = document.querySelector("#categories");
const itemRef = categoriesRef.querySelectorAll(".item");

const showСategoriesQuantity = (elements) =>
  `В списке ${elements.length} категории.`;

console.log(showСategoriesQuantity(itemRef));

itemRef.forEach((element) => {
  const titleRef = element.querySelector("h2");
  const categoryRef = element.querySelectorAll("li");

  console.log(`
	    Категория: ${titleRef.textContent}
	    Количество элементов: ${categoryRef.length}
	    `);
});
