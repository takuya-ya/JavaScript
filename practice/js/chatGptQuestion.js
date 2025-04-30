
let count = 0;
let sum = 0;

while (count <= 10) {
    count++;
    sum += count;
}

console.log('--------------------------');
console.log('問1の回答');
console.log(`整数1~10の和は${sum}です`);
console.log('--------------------------');


console.log('--------------------------');
console.log('問2の回答');
count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}
console.log('--------------------------');

console.log('--------------------------');
console.log('問3の回答');

let num = Math.floor(Math.random() * 10 + 1);
console.log(num);
count = 0;
sum = 0;
while (count <= num) {
    if (count % 2 === 0) {
        sum += count;
    }
    count ++;
}
console.log(sum);
console.log('--------------------------');

console.log('--------------------------');
console.log('4問の回答');

let time = Math.floor(Math.random() * 10 + 1);
console.log(time);
count = 0;

while (count <= time) {
    count++;
    console.log(`${count}回目のJavaScrit`);
}

console.log('--------------------------');