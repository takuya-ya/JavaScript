'use strict'

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    } else if (currentIndex === slides.length -1 ) {
      next.classList.add('hidden');
    }
  }

  function updateDots() {
    // 全てのボタンから色を変更するクラスを解除
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    // clickしたbuttonにクラスを付与
    dots[currentIndex].classList.add('current');
    updateButtons();
    moveSlides();
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      // buttonの作成
      const button = document.createElement('button');
      
      // clickイベントの設定
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
      })
      
      // 要素を配列に入れて、indexによる区別を実現して個別に操作可能にする
      dots.push(button);
      
      // navの子要素として追加
      document.querySelector('nav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  const moveSlides = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }
  // 初期化 hiddenが付与されていれば削除
  // 最初のページの場合は←を隠蔽
  updateButtons();
  // nav-buttonの作成
  setupDots();
  
  next.addEventListener('click', () => {
    currentIndex++;
    // 最後尾のページのcurrentIndexになれば隠蔽
    updateButtons();
    updateDots();
    moveSlides();
  })
  
  prev.addEventListener('click', () => {
    currentIndex--;
    // 最初のページのcurrentIndexになれば隠蔽
    updateButtons();
    updateDots();
    moveSlides();
  })
 


}