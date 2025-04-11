
// id="colorText" を持つ <p> 要素を取得して変数 text に代入
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

text.textContent = `カラーコード：${color.value}`;

const colorBg = () => {
    
    // 選択したカラーを背景色に設定
    // valueには選択したカラーの数値が入る
    // bodyがややこしい。これはメソッドでなくプロパティに近い。
    document.body.style.backgroundColor = color.value;
    
    // カラーコードを表示
        // else文がないと、一度表示した(white)が継続して表示されるので注意
    if (color.value === '#ffffff') {
        text.textContent = `カラーコード:${color.value} (white)`;
    } else if (color.value === '#000000') {
        text.textContent = `カラーコード:${color.value} (black)`;
    } else {
        text.textContent = `カラーコード:${color.value}`;
    }
}

color.addEventListener('input', colorBg);

// 練習
// const message = () => {
//     console.log('色が入力されたよ')
// }
// // const showSelectedColorMessage = () => {}
// color.addEventListener('input', message);


// 練習問題:スライダーを変更し、フォントサイスを動的に変更

// // inputタグを取得
// const sizeInput = document.querySelector('#fontSize');
// // pタグを取得
// const textSample = document.querySelector('#textSample');

// // 
// const showSelectedFontSizeMessage = () => {
//     console.log('フォントサイズが変更されたよ');
// }

// const changeFontSize = () => {
//     textSample.style.fontSize = `${sizeInput.value}px`;
// }

// document.addEventListener('input', showSelectedFontSizeMessage);
// document.addEventListener('input', changeFontSize);

const sizeInput = document.querySelector('#fontSize');
const textSample = document.querySelector('#textSample');

const showSelectedFontSizeMessage = () => {
    console.log('フォントサイズが変更されたよ');
}

const changeFontSize = () => {
    textSample.style.fontSize = `${sizeInput.value}px`
}

sizeInput.addEventListener('input', showSelectedFontSizeMessage);
sizeInput.addEventListener('input', changeFontSize);



