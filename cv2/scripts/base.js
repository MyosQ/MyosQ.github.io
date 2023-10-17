document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
});  