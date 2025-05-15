'use script';

{
const cl = console.log;

// const hello = () => {
//   return "Hello, JavaScript!";
// }

// console.log(hello());

// // Q2: JavaScriptには Math.PI という定数が組み込まれており、これは円周率（π ≒ 3.14159）を意味します。
// // この定数を使って、半径が5の円の面積を計算し、結果をコンソールに出力しよう。
// // ※ 円の面積は「半径 × 半径 × 円周率（π）」で求められます。

// const result = 5 * 5 * Math.round(Math.PI);

// console.log(result);

// // Q3: 変数numに10を代入し、それを2倍してコンソールを表示しよう。

// let num = 10;
// num *= 2;
// console.log(num);

// Q4: for 文を使って、1から5までの数字を配列に追加し、その配列をコンソールに出力しよう。

// array = [];
// for ( let i = 0; i <= 5; i++) {
//     array.push(i);
// }
// console.log(array);

/********** 2. 配列を操作する問題 **********/
// Q1: 配列 drinks を作成し、"coffee", "tea", "coke" を格納せよ。

// const drinks = ["coffee", "tea", "coke"];

// Q2: 配列の末尾に"orangejuice"を追加せよ。

// drinks.push("orangejuice");

// Q3: 先頭の要素を削除せよ。

// drinks.shift();
// cl(drinks);

// // Q4: teaを"greentea"に書き換えよ。

// // array.splice(開始位置, 削除数, 挿入したい値1, 値2, ...);
// drinks.splice(1, 1, "greentea");
// cl(drinks);


// // Q5: 配列の要素をforeach文を利用して表示せよ。

// drinks.forEach((drink) => {
//   cl(drink);
// })

/********** 3. オブジェクトを作って操作する問題 **********/
// const student = {
//   name: "Taro",
//   age: 18,
//   score: 90
// };

// // Q1: studentのnameを表示せよ。

// // cl(student.name);

// // Q2: ageを+1して更新せよ。

// // student.age + 1;
// // cl(student.age + 1);

// // Q3: subjectプロパティを追加し"English"を追加せよ。
// student.subject = "English";
// cl(student.subject);

// // Q4: すべてのプロパティをfor...in文を用いてループで表示せよ。
// for(key in student) {
//   cl(`${key}:${student[key]}`);
// }

// student.keyではなぜだめか　TODO

/********** 4. forEach、for、for...of の問題 **********/
// const numbersLot = [11, 22, 33, 44, 55];

// Q1: forEachで合計を計算せよ。

// let sum = 0;
// numbersLot.forEach( num => {
//   sum += num;
// })
// cl(sum);

// Q2: for文で2倍した配列を作れ。

// const doubled = [];

// for (let i = 0; i < numbersLot.length; i++) {
//    doubled.push(numbersLot[i] * 2)
// }
// cl(doubled);

// Q3: for...ofで全要素を出力せよ。

// for( number of numbersLot ) {
//   cl(number);
// }

/********** 5. while文＋break・continue **********/

// 次の条件を満たすJavaScriptのコードを作成してください。
// 変数 i を0で初期化し、while 文で i が30未満の間ループを続けること。
// ループのたびに i を1ずつ増やすこと。
// i が偶数のときは、処理をスキップして次のループに進むこと（continue を使うこと）。
// i が23を超えた場合は、ループを終了すること（break を使うこと）。
// 奇数のときのみ、console.log("5:", i); を実行して、値を表示すること。

// let i = 0;

// while(i < 30) {
  // i++はここ一回でOK
  // {}省略で1行で書ける
//   if ( i % 2 === 0 ) {
//     cl('contine');
//     i++;
//     continue;
//   } else if ( i === 23 ) {
//     cl('break');
//     break;
//   } else if ( i % 2 === 1) {
//     cl(`"5:", ${i}`);
//   }
//   i++;
// }

/********** 6. 複数のオブジェクトを表示 (イベント＋DOM) **********/
// 次の条件を満たすJavaScriptコードを書いてください。
// 以下のような複数の商品を持つ配列 products を用意する。
//     各商品はオブジェクトで、name（商品名）と price（価格）のプロパティを持つ。
//         ・例：{ name: "ペン", price: 100 }
//     HTMLに以下の要素があるとする。
//         ・商品を表示するための空の < ul id = "product-list" ></ul >
//         ・商品表示を開始するための < button id = "show-products" > 表示</button >
// 「表示」ボタンをクリックしたときに、products 配列のすべての商品を、
// < ul > の中に < li > 要素として追加し、商品名と価格を「ペン - 100円」のように表示する。
// クリックするたびにリストがクリアされ、同じ内容が再表示されるようにすること。

// <button id="show-products">表示</button>
// <ul id="product-list"></ul>
//上記のHTML要素はすでに当ファイルのbodyに存在している。

const products = [
  { name: "ペン", price: 100 },
  { name: "消しゴム", price: 200 },
  { name: "定規", price: 300 },
];

const ul = document.querySelector('#product-list');
const button = document.querySelector('#show-products');

button.addEventListener('click', () => {
  ul.innerHTML = '';
  products.forEach( product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - ${product.price}円`;
    ul.appendChild(li);
  })
})
// ボタン押す
// リセット
// loopでプロパティ抽出
// ulにliを追加
// liにtextContentでプロパティを挿入

// 一回目

// const list = document.getElementById('product-list');
// const button = document.querySelector('#show-products');

// button.addEventListener('click', () => {
//   list.innerHTML = '';   // リストをクリア（2回目以降のクリックに備えて）
//   products.forEach( product => {
//    const li = document.createElement('li');
//     li.textContent = `${product.name} - ${product.price}円`;
//     list.appendChild(li);
//   })
// })


}
// li  p で $naem - $prise の形で入れる

