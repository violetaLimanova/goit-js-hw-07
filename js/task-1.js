'use strict';

// Порахує й виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й
//  виведе в консоль текст заголовка елемента (тегу <h2>) і
// кількість елементів у категорії (усіх <li>, вкладених у нього).

// Вимоги

// Кількість категорій, їх назва та кількість елементів отримані за
// допомогою властивостей і методів DOM-елементів.
// Дані за кожною категорією отримані й виведені в консоль у тілі
// циклу або методу forEach().
// У консолі має бути виведено таке повідомлення:

const categoryItem = document.querySelectorAll('#categories .item');
console.log(`Numbers of categories: ${categoryItem.length}`);

categoryItem.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  const elemCount = item.querySelectorAll('ul li').length;
  console.log(`Elements: ${elemCount}`);
});
