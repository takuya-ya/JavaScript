const ads = document.querySelectorAll('.ad-banner');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const adId = entry.target.dataset.adId;
            console.log(`広告 ${adId} が表示されました`);
            // 一度だけ記録するように監視を解除
            observer.unobserve(entry.target);

            // サーバー送信などもここで
            // fetch('/track-ad-view', { method: 'POST', body: JSON.stringify({ adId }) });
        }
    });
}, { threshold: 0.5 }); // 50%見えたらカウント

ads.forEach(ad => observer.observe(ad));