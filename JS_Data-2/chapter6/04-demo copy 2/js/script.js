// const heading = document.querySelector('#heading');

// // const keyframes = {
// //   opacity: [0, 1],
// //   translate: ['0 50px', 0],
// // };

// const options = {
//   duration: 2000,
//   easing: 'ease',
// };

// heading.animate(keyframes, options);

// const keyframes = {
//     opacyty: [0,1],
//     translate: ['0 50px', 0],
// }



const heading = document.querySelector('#heading');
// const keyframes = {
//   opacity: [0, 1],
//   translate: ['0 50px', 0],
// }

const option = {
  duration: 2000,
  // direction: 'alternate',
  // iterations: Infinity,
  // easing:'ease',
}

const keyframes = {
    // rotate: ['x 360deg', 0],
    // opacity: [0, 1],
    // color: ['red', 'yellow', 'green', 'blue'],
    color: ['transparent', '#fff'],
    backgroundPosition: ['100% 0', '0 0' ],

}


heading.animate(keyframes,option);
