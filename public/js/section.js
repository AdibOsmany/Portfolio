document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.section');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetId === 'contact-section') {
                // Scroll to the bottom of the contact section
                window.scrollTo({
                    top: document.documentElement.scrollHeight, // Scroll to the very bottom of the document
                    behavior: 'smooth'
                });
            } else {
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
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (scrollPosition >= documentHeight) {
            index = sections.length - 1; // Set the index to the last section
        } else {
            // Normal section activation logic
            while (--index && window.scrollY + headerHeight + 1 < sections[index].offsetTop) {}
        }
        buttons.forEach(button => button.classList.remove('active'));
        if (sections[index]) {
            const activeButton = Array.from(buttons).find(button => button.getAttribute('data-target') === sections[index].id);
            if (activeButton) activeButton.classList.add('active');
        }
    });
    
    // Automatically press the "Home" button on load
    buttons[0].classList.add('active');


});


// document.addEventListener('DOMContentLoaded', () => {
//     const header = document.querySelector('header');
//     const sections = document.querySelectorAll('.section');

//     const headerHeight = header.offsetHeight;
//     const sectionHeight = `calc(100vh - ${headerHeight}px)`;

//     sections.forEach(section => {
//         section.style.height = sectionHeight;
//     });

// });

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});