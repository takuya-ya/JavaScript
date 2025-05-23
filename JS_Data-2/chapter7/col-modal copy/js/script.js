const open = document.querySelector('#open');
const close = document.querySelector('#close');
const modal = document.querySelector('#modal');
const mask = document.querySelector('#mask');
// const showKeyframes = {
//   opacity: [0, 1],
//   visibility: 'visible',
// };
// const hideKeyframes = {
//   opacity: [1, 0],
//   visibility: 'hidden',
// };
// const options = {
//   duration: 800,
//   easing: 'ease',
//   fill: 'forwards',
// };

// // モーダルウィンドウを開く
// open.addEventListener('click', () => {
//   modal.animate(showKeyframes, options);
//   mask.animate(showKeyframes, options);
// });

// // モーダルウィンドウを閉じる
//   // close.addEventListener('click' ~)で、closeにclickを登録している 
// close.addEventListener('click', () => {
//   modal.animate(hideKeyframes, options);
//   mask.animate(hideKeyframes, options);
// });

// // マスクをクリックしてモーダルウィンドウを閉じる
// mask.addEventListener('click', () => {
//   // 上記で登録したclose.clickを呼び出している
//   close.click();
// });

const showKeyframes = {
  opacity: [0, 1],
  visibility: 'visible',
};

const hideKeyframes = {
  opacity: [1, 0],
  visibility: 'hidden',
};

const options = {
  duration: 800,
  easing: 'ease',
  fill:'forwards',
};

open.addEventListener('click', () => {
  modal.animate(showKeyframes, options);
  mask.animate(showKeyframes, options);
});

close.addEventListener('click', () => {
  modal.animate(hideKeyframes, options);
  mask.animate(hideKeyframes, options);
});
