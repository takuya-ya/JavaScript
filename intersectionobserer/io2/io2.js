const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.id;
        const link = document.querySelector(`#link-${id}`);
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section => observer.observe(section));