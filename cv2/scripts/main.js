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





    const tab_buttons = document.querySelectorAll('.tab-button');
const skill_classes = document.querySelectorAll('.skill-class');
const skills_container = document.getElementById('skills');

tab_buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove active class from all
    skill_classes.forEach(skill_class => {
      skill_class.classList.remove('active');
    });

    // Add active class to the selected skill_class
    const target = document.getElementById(`content${index + 1}`);
    target.classList.add('active');

    // Calculate the amount to scroll horizontally
    const scroll_position = target.getBoundingClientRect().left - skills_container.getBoundingClientRect().left;
    console.log(scroll_position);

    // Use CSS scroll-behavior for smooth scrolling
    skills_container.scrollTo({
      right: scroll_position,
      behavior: 'smooth'
    });
  });
});

});
    