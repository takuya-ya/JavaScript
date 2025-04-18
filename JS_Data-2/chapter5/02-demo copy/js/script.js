const menu = document.querySelector('#menu');


const lists = [
    'strawberry.jpg',
    'lime.jpg',
    'mango.jpg',
    'lemon.jpg',
    'fig.jpg',
    'apple.jpg',
];

// const content = 
// `<div><img src="images/${lists[0]}" alt=""></div>
// <div><img src="images/${lists[1]}" alt=""></div>
// <div><img src="images/${lists[2]}" alt=""></div>
// <div><img src="images/${lists[3]}" alt=""></div>
// <div><img src="images/${lists[4]}" alt=""></div>
// <div><img src="images/${lists[5]}" alt=""></div>`
// ;

// menu.textContent = content;
// menu.insertAdjacentHTML('beforeend', content);

// 画像の増加に対して、自動でiの上限数を更新する為に、要素数を自動取得する方法に変更。
// for(let i = 0; i < 6; i++) {
for(let i = 0; i < lists.length; i++) {
    const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}

// コンソールに2の倍数を出力
const max = 10;
for(let i = 1; i <= max; i++) {
    const baisuu = i * 2;
    console.log(`${baisuu}`);
}

// 1~30までの整数の偶数だけをコンソールに出力

for (i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}