// const heading = document.querySelector('#heading');

// // 変化の内容
// const keyframes = {
//   opacity: [0, 1],
//   // translateの右、下へ移動する値を指定する
//   translate: ['0 50px', 0],
// };
// // 変化の制御
// const options = {
//   duration: 2000,
//   easing: 'ease',
// };

// heading.animate(keyframes, options);

heading = document.querySelector('#heading');

const keyframes = {
  // opacity : [0, 1],
  // translate : ['0 50px', 0],
  // rotate : ['x 360deg'],
  color: ['transparent', '#fff'],
  backgroundPosition: ['100% 0', '0 0']
}

const option = {
  duration : 1000,
  easing : 'ease'
}

heading.animate(keyframes, option);