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

  // 見出しタイトル背景色のアニメ
  // color: ['transparent', '#fff'],
  // backgroundPosition: ['100% 0', '0 0']

  // スライム的な動き
    // 上（左）から順に実行される
  borderRadius : [
    '20% 50% 50% 70%/50% 50% 70% 50%',
    '50% 20% 50% 50%/40% 40% 60% 60%',
    '50% 40% 20% 40%/40% 50% 50% 80%',
    '50% 50% 50% 20%/40% 40% 60% 60%',
  ]
}

const option = {
  // easing : 'ease'
  duration : 7000,
  // 方向：進行方向を往復にする
  direction: 'alternate',
  // 反復
  iterations: Infinity,
}

heading.animate(keyframes, option);