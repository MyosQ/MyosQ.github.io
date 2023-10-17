function intersectionObservers() {
    const sections = document.querySelectorAll('.slide-left, .scale-y, .fade-in');
    const options = {
        root: null,
        threshold: 1.0,
        rootMargin: '0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
}



$(document).ready(() => {
    AOS.init();
    intersectionObservers();
});
    