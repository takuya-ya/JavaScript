'use strict';

{
  const open = document.querySelector('.open');
  const mask = document.querySelector('.mask');
  const modal = document.querySelector('.modal');
  const close = document.querySelector('.close');

  open.addEventListener('click', () => {
    modal.classList.remove('modal-hidden');
    mask.classList.remove('mask-hidden');
  } );

  close.addEventListener('click', () => {
    modal.classList.add('modal-hidden');
    mask.classList.add('mask-hidden');
  })
  
  mask.addEventListener('click', () => {
    close.click();
  })

  // 詳細を見るをクリックしたら表示
  // 閉じるをクリックしたら隠す
}