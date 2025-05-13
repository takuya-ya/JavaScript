'use strict';

{
  // リンク部分
  const menuItems = document.querySelectorAll('.menu li a');
  // リンク下のコンテンツ部分
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });

      contents.forEach(content => {
        content.classList.remove('active');
      });

      clickedItem.classList.add('active');

      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  })
}