const menu = document.querySelector('#menu');

const strawberry = {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450,
};

console.log(strawberry.name);
console.log(strawberry['img']);

const key = 'name';

console.log(strawberry.key);
console.log(strawberry[key]);

const lists = [
    {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450
    },
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: 350
    },
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: 350
    },
    {
        name: 'レモン',
        img: 'lemon.jpg',
        price: 250
    },
    {
        name: 'イチジク',
        img: 'fig.jpg',
        price: 150
    },{
        name: 'アップル',
        img: 'apple.jpg',
        price: 50
    },
];

// for(let i = 0; i < lists.length; i++) {
//     const content = `
//     <div><img src="images/${lists[i].img}" alt="">` `<p>${lists[i].name}</p>` `<p>${lists[i].price}</p></div>`;
//     menu.insertAdjacentHTML('beforeend', content);
// };

for(let i = 0; i < lists.length; i++) {
    const {name, price, img} = lists[i];
    const content = `
    <div><img src="images/${img}" alt=""><p>${name}</p><p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);
};


