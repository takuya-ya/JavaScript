
const images = document.querySelectorAll('.lazy');

const observer = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    entries.forEach(entry => {
        // 交差するのはどこだっけ
        if (entry.isIntersecting) {
            const img = entry.target;
            // この段階でsrcに画像パスが入る imgのsrc属性を追加し、属性の値（htmlのパスをtargetで取得してそれをまたhtmlに入れている）を代入
            img.src = img.dataset.src;
            img.addEventListener('load', () => {
                img.classList.add('loaded')
            });
            observer.unobserve(img);
        }
    });
}, {
    threshold: 0.1
});

// img毎に監視指定
images.forEach(img => observer.observe(img));
// ↑の関数部分を略している。正式には↓
// images.forEach(function(img) {
//     return observer.observe(img);
//   });
  

//IOが発火したとき、IntersectionObserverEntry オブジェクトの配列が渡されます（entries）。この配列には、監視対象の要素（ターゲット）がどのように交差しているかの情報が含まれています。

//isIntersecting: 要素がビューポートと交差しているかどうかを示す true / false の値ですintersectionRatio: 要素がどの程度交差しているかを示す比率（0～1の範囲）
//target: 交差を監視しているターゲットの DOM 要素
//boundingClientRect: 要素の位置や大きさを示す DOMRect オブジェクト。
//intersectionRect: 要素が交差している領域の情報を示す DOMRect オブジェクト。//

