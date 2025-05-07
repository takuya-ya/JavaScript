const countupbutton = document.querySelector('.countup');

countupbutton.addEventListener('click', () => {
  const counter = document.querySelector('.counter');
  counter.textContent = parseInt(counter.textContent) + 1;
})