// const getScrollPercent = () => {
//   // スクロール量
//   const scrolled = window.scrollY;
//   console.log(`${scrolled} スクロールされました`);

//   // ページ全体の高さ
//   const pageHeight = document.documentElement.scrollHeight;

//   // 表示領域の高さ
//   const viewHeight = document.documentElement.clientHeight;
//   //console.log(`ページの高さ：${pageHeight}、表示領域の高さ：${viewHeight}`)

//   // スクロールされた割合
//   const percentage = scrolled / (pageHeight - viewHeight) * 100;
//   //console.log(percentage);
  
//   // プログレスバーに幅を指定
//   document.querySelector('#bar').style.width = `${percentage}%`;
// };

// window.addEventListener('scroll', getScrollPercent);




const getScrollPercent = () => {
  // スクロール量
  const scrolled = window.scrollY;
  // 全体の高さ
  const pageHeight = document.documentElement.scrollHeight;
  // ページの内表示している部分の高さ
  const viewHeight = document.documentElement.clientHeight;
  
  // スクロール量／（全体の高さーページの高さ）　* 100%
  const scrollPercent = scrolled / (pageHeight-viewHeight) * 100


  document.querySelector('#bar').style.width = `${scrollPercent}%`;
}

window.addEventListener('scroll', getScrollPercent);