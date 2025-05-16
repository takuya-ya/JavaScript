'use strict';

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
}

console.log('!!!!!!!!befor')

isRightTriangle(3, 4, 5); // true

console.log('after!!!!!!!!')