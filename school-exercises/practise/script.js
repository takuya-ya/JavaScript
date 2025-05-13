// Q.1
const fruits = ["apple", "banana", "kiwi"];
const fruitsLength = [];

fruits.forEach(fruit => {
  fruitsLength.push(fruit.length);
});
console.log(fruitsLength);

// Q.2
const numbers = [1,4,7,10,12,15];
let sum = 0;

numbers.forEach(number => {
  if (number % 2 === 0) {
    sum += number;
  }
});
console.log(sum);

// Q.3
const users = [
  {id:1, name:"Yamada"},
  {id:2, name:"Tanaka"},
  {id:3, name:"Suzuki"},
];

const names = [];
users.forEach(user => {
  names.push(user.name);
});
console.log(names);

//Q4

const results = [
  { name:"Ken", score:10},
  { name:"Yuke", score:15},
  { name:"Aoi", score:20},
];

let sum2 = 0;
// results.forEach(result => {
for(let result of results)  {
  sum2 += result.score * 2;
};
console.log(sum2);

// q6 q5はスキップ
const users6 = [
  {name:"山田", age:22},
  {name:"田中", age:35},
  {name:"斎藤", age:30},
]

users6.forEach(user => {
  if(user.age >= 30) {
    console.log(user.name);
  };
});

// q7
const  books = [
  {title:"JavaScript入門", stock: 3},
  {title:"PHP入門", stock: 0},
  {title:"Laravel入門", stock: 5} 
];

for(let book of books) {
  if(book.stock === 0) {
    console.log(`在庫切れ:${book.title}`);
  }
}

// while文の問題

//q1,2

let num = 0;
while(num < 20) {
  num++;
  if (num === 10) {
    console.log(num);
    break;
  }
}
console.log(num);

//q3
const nums = [];

num = 0;
while(num < 20) {
  num++;
  if (num % 3 === 0) {
    continue;
  }
  nums.push(num);
}
console.log(nums);

nums3 = [];
num = 0;

while(num < 20) {
  num++;
  if (num % 2 === 0) {
    nums3.push(num);
    continue;
  }
}
console.log(nums3);

//q6
num = 0;
while(num < 100) {
  let randomNum = Math.floor(Math.random() * 10) + 1;
  num += randomNum;
}
console.log(num);

//q7
let num7 = 0;
let count = 0;

while(count < 30) {
  
  const randomNum = Math.floor(Math.random() * 10) + 1;
  num7 += randomNum;
}
console.log(num7);
