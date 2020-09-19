// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания
// DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");
const doIngredientsList = (ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  return liRef;
};

const elements = ingredients.map(doIngredientsList);
ingredientsRef.append(...elements);
console.log(ingredientsRef);
