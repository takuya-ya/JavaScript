console.log('--------------------------');
console.log('問1の回答');


let score = Math.floor(Math.random() * 100 + 1);
console.log(score);

let review = '';
score >= 90 ? review = '優' :
score >= 70 ? review = '良' :
score >= 50 ? review = '可' :
// score < 50 ? review = '不可' ;
review = '不可' ;

console.log(review);

console.log('--------------------------');



console.log('--------------------------');
console.log('問2の回答');

let age = 0;
let lifeStage = '';

age = Math.floor(Math.random() * 101);
console.log(`年齢は${age}歳です。`);
age >= 65 ? lifeStage = '高齢者':
age >= 20 ? lifeStage = '大人':
age >= 13 ? lifeStage = '学生':
lifeStage  = '子供';

console.log(`ライフステージは${lifeStage}です。`);
console.log('--------------------------');


console.log('--------------------------');
console.log('問5の回答');

let price = 0;
let discount = 0;

price = Math.floor(Math.random() * 20001);
console.log(`価格は${price}円です。`);
price >= 10000 ? discount = 0.2:
price >= 5000 ? discount = 0.1:
discount = 0;
discount *= 100;

console.log(`割引率は${discount}%です。`);
console.log('--------------------------');


console.log('--------------------------');
console.log('問6の回答');

let a = Math.floor(Math.random() * 10 + 1);
let b = Math.floor(Math.random() * 10 + 1);

let minus = (a - b);
console.log (minus);
let results = '';
minus > 0 ? results = '正の数':
minus < 0  ? results = '負の数':results = 'ゼロ';
console.log(results);

console.log('--------------------------');
