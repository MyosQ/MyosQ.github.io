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

function set_initial_tab(tab) {
  tab.click();
}

function init_map() {
  
  const map_div = document.getElementById('map');
  const current_lat = map_div.getAttribute('data-current-location-lat');
  const current_lon = map_div.getAttribute('data-current-location-lon');
  
  const map = L.map('map', {
    center: [current_lat, current_lon],
    zoom: 3,
    zoomControl: false, // Disables zoom control
    dragging: false, // Disables panning
    scrollWheelZoom: false, // Disables zooming with the scroll wheel
    doubleClickZoom: false, // Disables zooming on double click
    touchZoom: false, // Disables pinch-to-zoom on touch devices
    attributionControl : false,
  });

  
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const icon_size = 38;
  const icon_normal = L.icon({
    iconUrl: 'assets/map-marker.png',
    iconSize: [icon_size, icon_size], // size of the icon
    iconAnchor: [icon_size/2, icon_size], // point of the icon which will correspond to marker's location
  });

  const icon_hover_size = icon_size * 1.3;
  const icon_hover = L.icon({
    iconUrl: 'assets/map-marker.png',
    iconSize: [icon_hover_size, icon_hover_size], // size of the icon
    iconAnchor: [icon_hover_size/2, icon_hover_size], // point of the icon which will correspond to marker's location
  });

  const marker = L.marker([current_lat, current_lon], {icon: icon_normal}).addTo(map)

  marker.on('mouseover', function(e) {
    marker.setIcon(icon_hover);
  });

  marker.on('mouseout', function(e) {
    marker.setIcon(icon_normal);
  });
}

$(document).ready(() => {
  AOS.init();
  intersectionObservers();
  initSkillClassStuff(); 
  init_map();
});

$(window).resize(() => {
    initSkillClassStuff();
});
