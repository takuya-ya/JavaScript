
const accordions = document.querySelectorAll('.accordion');

// アコーディオンの開閉処理（三項演算子＆アニメ付き）
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const current = header.parentElement;

        // 他のセクションを閉じる
        accordions.forEach(a => {
            if (a !== current) a.classList.remove('open');
        });

        // トグル（三項演算子）
        current.classList.contains('open')
            ? current.classList.remove('open')
            : current.classList.add('open');
    });
});


// 読了判定（IntersectionObserver）
const markers = document.querySelectorAll('.read-marker');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const accordion = entry.target.closest('.accordion');
            const sectionId = accordion.dataset.id;

            console.log(`✅ セクション ${sectionId} を読了！`);

            accordion.classList.add('read'); // 読了フラグを追加
            observer.unobserve(entry.target); // 1回だけでOK
        }
    });
}, {
    threshold: 1.0
});

markers.forEach(marker => observer.observe(marker));