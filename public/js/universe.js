document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('home-section');
    const numberOfStars = 500;  // You can adjust the number of stars here

    // Function to create a star
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`; // Twinkle speed
        homeSection.appendChild(star);
    }

    // Generate stars
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }
});
