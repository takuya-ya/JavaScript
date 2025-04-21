// console.log('準備完了！');

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// document.querySelector('')

// document.querySelector('#colorText').textContent='カラーコード:${document.querySelector}';

document.addEventListener('input', () => {
    text.textContent=`カラーコード:${color.value}`;
    document.body.style.backgroundColor = color.value;
    if (color.value === '#ffffff') {
        text.textContent=`カラーコード:${color.value}(white)`;
    } else if (color.value === '#000000') {
        text.textContent=`カラーコード:${color.value}(black)`;
    } else {
        text.textContent=`カラーコード:${color.value}`;
    }
})
