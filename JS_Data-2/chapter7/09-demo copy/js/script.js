/*
ローディングから画面遷移
================================================ */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディング中（グレースクリーン）
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中（薄緑スクリーン）
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );  

  // ローディング中テキスト
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8  //80%
      },
      {
        opacity: 0,
        offset: 1  //100%
      },
    ], 
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});

/*
画像ギャラリー
================================================ */
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

thumbImages.forEach((thumbImage)=>{
  thumbImage.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0, 1]}, 500);
  });
});

// /*
// スライドメニュー
// ================================================ */
// /* ----- ↓↓ 追加 ↓↓ ----- */
// const menuOpen = document.querySelector('#menu-open');
// const menuClose = document.querySelector('#menu-close');
// const menuPanel = document.querySelector('#menu-panel');
// const menuItems = document.querySelectorAll('#menu-panel li');
// const menuOptions = {
//   duration: 1400,
//   easing: 'ease',
//   fill: 'forwards',
// };

// // メニューを開く
// menuOpen.addEventListener('click', () => {
//   menuPanel.animate({translate: ['100vw', 0]}, menuOptions);

//   // リンクをひとつずつ順に表示
//   menuItems.forEach((menuItem, index) => {
//     //console.log(`${index}番目のリスト`);
//     menuItem.animate(
//       {
//         opacity: [0, 1],
//         translate: ['2rem', 0],
//       },
//       {
//         duration: 2400,
//         delay: 300 * index,
//         easing: 'ease',
//         fill: 'forwards',
//       }
//     );
//   });
// });

// // メニューを閉じる
// menuClose.addEventListener('click', () => {
//   menuPanel.animate({translate: [0, '100vw']}, menuOptions);
//   // menuItems.forEach((menuItem) => {
//   //   menuItem.animate({opacity: [1, 0]}, menuOptions);
//   // });
// });
// /* ----- ↑↑ 追加 ↑↑ ----- */

// P298~
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
// fix:querySelectorAllになっておらず、配列として取得できてない
const menuItems = document.querySelectorAll('#menu-panel li');

// オブジェクトプロパティ
const menuOptions = {
  duration: 1200,
  easing: 'ease',
  fill: 'forwards',  
}

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
  // JavaScriptのforEach → オブジェクトのメソッドだからキャメルケース（小→大）
    // PHPのforeach → 言語に組み込まれた文法だから小文字
  // indexは配列番号。foreachの第二引数に自動で入る
    menuItems.forEach((menuItem, index) => {
    console.log(`${index}番目:${menuItem}`);
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      }, {
        duration:2400,
        easing: 'ease',
        delay: 300 * index,
        fill: 'forwards',
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => { menuItem.animate({opacity: [1, 0]}, 
  menuOptions)})
});

// 監視対象が範囲内に出現した場合の処理,
  // 第二引数にはロボ自身が入る。fadeOvserverでは混乱する為、慣習名o
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    // 今のままだと「入った・出た」両方反応してる。交差時のみ実行したい。
    // console.log(entry.target);
    if (entry.isIntersecting) {
      // console.log(entry.target);
      entry.target.animate({
        opacity: [0, 1],
        filter: ['blur(.4rem)', 'blur(0)'],
        translate: ['0 50px', 0],

      }, {
        duration: 2000,
        easing: 'ease',
        fill: 'forwards',
      })
      obs.unobserve(entry.target);
    };
  });
}

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// .fadeinを監視するよう指示
const fadeElements = document.querySelectorAll('.fadein');
// 誤 fadeElements.forEach('fadeElement', () => {~}
  // foreachの第一引数は関数にすること 修正して無名関数を設定。しかもfadeElementは関数なので''で文字列化は不要
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
}
);
