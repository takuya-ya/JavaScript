// // 監視対象が範囲内に現れたら実行する動作
// const showKirin = (entries) => {
//   const keyframes = {
//     opacity: [0, 1],
//     translate: ['200px 0', 0],
//   };
//   //console.log('キリンさんです');
//   //console.log(entries[0].target);
//   entries[0].target.animate(keyframes, 600);
// };
  
// // 監視ロボットの設定
// const kirinObserver = new IntersectionObserver(showKirin);

// // #kirinを監視するよう指示
// kirinObserver.observe(document.querySelector('#kirin'));

const showKirin = (entries) => {
// console.log(entries[0].target);
const keyframes = {
    translate: ['200px 0', 0],
    opacity: [0 ,1],
};
entries[0].target.animate(keyframes, 600);

// const options = {
//     du
// }

};

const kirinObserver = new IntersectionObserver(showKirin);
const kirin = document.querySelector('#kirin');
// kirin.animate(keyframes, options);
kirinObserver.observe(kirin);