const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.id;
        //  <section id="sec1">と交差し、左記id取得。それを下記に代入。結果linkにはnav aの要素が入る
        const link = document.querySelector(`#link-${id}`);
        // 交差したら
        if (entry.isIntersecting) {
            // 交差するたびに全てのリンクのクラスをチェックしている。
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section => observer.observe(section));