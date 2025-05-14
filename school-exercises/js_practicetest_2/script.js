'use script';

const cl = console.log;

// {
//   //問１

// //a
// // alert('表示テスト');

// //b
// document.querySelector('#choice');

// //c
// // const isAdult = confirm('18才以上ですか？');

// // if(isAdult === true) {
// //   console.log('購入可能')
// // } else {
// //   console.log('購入不可')
// // }

// let answer = 158;
// const price = 15000;

// //f TODO　サイコロの目を調整
// let dice = Math.floor(Math.random() * 10 + 1);
// cl(dice);
// }

//問2
// {
//   const cl = console.log;

// let price = 0;
// //TODO * 101の解明
// // price = Math.floor(Math.random() * (100000 + 1)); // 0〜100 の整数
// // cl(price);
// // if ( price >= 100000 ) {
// //   alert('30%オフ');
// // } else if ( price >= 8000) {
// //   alert('15%オフ');
// // } else if ( price >= 5000) {
// //   alert('10%オフ');
// // } else {
// //   alert('5%オフ');
// // }

// //問3
// //a
// const members = ['桑原', '関根', '佐野', '牧', '宮崎', '筒香', '山本', '京田', '東'];

// //b
// for(let member of members) {
//   if ( member === '牧') {
//     cl('牧');
//     break;
//   }
// }

// //c
// members.push('三浦');

// //d
// // members.forEach(member => {
// //   cl(member);
// // })
// }

// //問4
// {
//   const cl = console.log;


// //a
// let priceWithTax = 0;
// const total = (price) => {
//   priceWithTax = Math.round(price * 1.1);
//   cl(priceWithTax);
// };

// total(100);

// //b

// let buttom = document.getElementById('btn');
// buttom.addEventListener('click', () => {
//   cl('クリックされました');
// });

// //c

// const now = new Date();
// cl(now.toLocaleString());

// //d

// const showProf = (name, age) => {
//     cl(`${name}さんの年齢は${age}歳です`);
// };
// showProf('山内', 38);

//問5

// const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'];

// for (let i = 0; i < photos.length; i++) {
//   let img = document.createElement('img');
//   img.src = `./image/${photos[i]}`;
//   document.getElementById('img_id').appendChild(img);
// }

//問6
// 逐次確認 データセットとは　
let person = document.querySelectorAll('.person');
const persons = [];

// 配列に抽出した情報を、加工してpersons配列へ保存
for(let i = 0; i < person.length; i++) {
  persons.push({
    userID:person[i].dataset.userId,
    userName:person[i].dataset.userName,
    userCost:person[i].dataset.userCost,
  });
}

// button要素取得
const btnUserInfo = document.querySelector('#btnUserInfo');
// 発火により、処理を実行


btnUserInfo.addEventListener('click', () => {
  for(let i = 0; i < persons.length; i++) {
    cl(
      // TODO　べた書きになっているので、変数に代入した方がいい
      // ※1 parsonsで取得しているのに、またここでdatasetから取得していて冗長
      `${person[i].dataset.userName}のコストは${person[i].dataset.userCost}円です`
    )
  }});

// persons配列にデータがあるのに、再びperson[i]から参照している

// 変数展開せずにテンプレートリテラル内で直接参照していて読みづらい

// ※1 for ループ内で毎回 dataset を読み直していて冗長

// userID は取得しているが出力に使っていない（用途が不明）

// 可読性を向上させるため for...of と分割代入を使うべき
