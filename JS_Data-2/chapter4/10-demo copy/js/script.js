// const isAgreed = document.querySelector('#check');
// const btn = document.querySelector('#btn');

// isAgreed.addEventListener('change', () => {
//     console.log(isAgreed.checked);
//     btn.disabled = !isAgreed.checked;
// }


// )

// const isAgreed = document.querySelector('#check');
// const btn = document.querySelector('#btn');

// isAgreed.addEventListener('change', () => {

//     btn.disabled = !isAgreed.checked;
// })

// const agree = document.querySelector('#agree');
// const text = document.querySelector('#status');

// agree.addEventListener('change', () => {
//     if (agree.checked) {
//         text.textContent = '同意済み';
//     } else {
//         text.textContent = '非同意'
//     }
// })

const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keydown', () => {
    count.textContent = text.value.length;
})

