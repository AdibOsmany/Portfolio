document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.section');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Scroll to the target section with the header just above it
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight, // Adjust scroll position by header height
                    behavior: 'smooth'
                });
            }
        });
    });

    document.addEventListener('scroll', () => {
        let index = sections.length;
        while (--index && window.scrollY + headerHeight + 1< sections[index].offsetTop) {}
        buttons.forEach(button => button.classList.remove('active'));
        if (sections[index]) {
            const activeButton = Array.from(buttons).find(button => button.getAttribute('data-target') === sections[index].id);
            if (activeButton) activeButton.classList.add('active');
        }
    });
    
    // Automatically press the "Home" button on load
    buttons[0].classList.add('active');


});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.planet-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.section');

    const headerHeight = header.offsetHeight;
    const sectionHeight = `calc(100vh - ${headerHeight}px)`;

    sections.forEach(section => {
        section.style.height = sectionHeight;
    });

});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});