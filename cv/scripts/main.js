function intersectionObservers() {
    const sections = document.querySelectorAll('.slide-left, .scale-y, .fade-in');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
}

function initSkillClassStuff() {
  const tab_buttons = document.querySelectorAll('.tab-button');
  const skill_classes = document.querySelectorAll('.skill-class');
  const skills_container = document.getElementById('skill-classes-all');

  tab_buttons.forEach(tab => {
    tab.addEventListener('click', () => {
      skill_classes.forEach(skill_class => {
        skill_class.classList.remove('active');
      });
      tab_buttons.forEach(tab_button => {
        tab_button.classList.remove('active');
      });

      const skill_class_id = tab.getAttribute("data-skill-class-id");

      const target = document.getElementById(skill_class_id);
      target.classList.add('active');
      tab.classList.add('active');

      const scroll_position = target.getBoundingClientRect().left - skills_container.getBoundingClientRect().left;
      skills_container.style.left = `-${scroll_position}px`;
    });
  });

  const parent_element = document.querySelector('#skill-class-wrapper');
  const child_element = document.querySelector('#skill-classes-all');
  const child_height = Math.ceil(child_element.getBoundingClientRect().height);
  parent_element.style.height = `${child_height}px`;
}


$(document).ready(() => {
  AOS.init();
  intersectionObservers();
  initSkillClassStuff(); 
});

$(window).resize(() => {
    initSkillClassStuff();
});
    