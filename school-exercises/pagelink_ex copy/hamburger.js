'use strict';



const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const links = document.querySelectorAll('#menu a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.remove('close');
        menu.classList.add('active');
    }
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menu.classList.add('close');
        hamburger.classList.remove('active');
    })
})

// ここで条件分岐しないとmenuを開く際のアニメでもremoveが発動し、意図しない動作になる
menu.addEventListener('animationend', (e) => {
    console.log(e);
    if(e.animationName == 'slideOut') {
        menu.classList.remove('close');
    }
})

// // アニメーション終了後クラス除去
//     // eはeventの略
// menu.addEventListener('animationend', (e) => {
//     console.log(e);
//     console.log(`Animation ended: ${e.animationName}`);
//     if (e.animationName === 'slideOut') {
//         menu.classList.remove('close');
//     }
// });

// // 開閉処理
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');

//     if (menu.classList.contains('active')) {
//         menu.classList.remove('active');
//         menu.classList.add('close');
//     } else {
//         menu.classList.remove('close');
//         menu.classList.add('active');
//     }
// });

// // メニュー内リンククリックで閉じる
// links.forEach(link => {
//     link.addEventListener('click', () => {
//         if (menu.classList.contains('active')) {
//             menu.classList.remove('active');
//             menu.classList.add('close');
//             hamburger.classList.remove('active');
//         }
//     });
// });

// // menu 要素でアニメーションが終わったら、関数を実行。
// // 終了したアニメーションの名前が 'slideOut' なら…
// // menu 要素から close クラスを削除する（これでCSS状態を初期化できる

// // click や scroll はユーザー操作に反応するイベントで、animationend や transitionend はCSSのアニメーションやトランジションが終了したタイミングで発生するイベントです。
// // どちらも addEventListener を使ってイベントリスナーを設定し、特定のタイミングで実行される処理を登録する点では共通していますが、発生するタイミングや目的が異なります。

