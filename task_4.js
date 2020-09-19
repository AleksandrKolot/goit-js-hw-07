// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const dataRefs = {
  counterRef: document.querySelector('#counter'),
  decrementBtnRef: document.querySelector('[data-action="decrement"]'),
  incrementBtnRef: document.querySelector('[data-action="increment"]'),
  valueRef: document.querySelector('#value'),
};

let counterValue = 0;

function increment() {
  counterValue += 1;
  dataRefs.valueRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  dataRefs.valueRef.textContent = counterValue;
}

dataRefs.incrementBtnRef.addEventListener('click', increment);
dataRefs.decrementBtnRef.addEventListener('click', decrement);
