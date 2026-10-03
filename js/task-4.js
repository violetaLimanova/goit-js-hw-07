// Обробка відправлення форми form.login-form повинна
// відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з
// попередженням про те, що 'All form fields must be filled in'.
// Не додавай на інпути атрибут required, валідація має відбуватися
// саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери
// значення полів в об'єкт з двома властивостями, де ключ — це ім'я
// інпутів, а значення — відповідні значення цих інпутів, очищені від
// пробілів по краях. Для збору значень полів форми використовуй
//  FormData.
// При сабміті форми виведи об'єкт із введеними даними в консоль і
// очисти значення полів форми методом reset.

const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = {};
  let hasEmptyField = false;

  formData.forEach((value, key) => {
    const trimmedValue = value.trim();
    if (trimmedValue === '') {
      hasEmptyField = true;
    }
    data[key] = trimmedValue;
  });
  if (hasEmptyField) {
    return alert('All form fields must be filled in');
  }

  console.log(data);
  event.currentTarget.reset();
});
