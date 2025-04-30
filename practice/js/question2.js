let score = Math.floor(Math.random() * 100 + 1);
console.log(score);

let review = '';
score >= 90 ? review = '優' :
score >= 70 ? review = '良' :
score >= 50 ? review = '可' :
// score < 50 ? review = '不可' ;
review = '不可' ;

console.log(review);