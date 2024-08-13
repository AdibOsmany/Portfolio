document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-button');
  const sections = document.querySelectorAll('.section');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-target');
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });

  document.addEventListener('scroll', () => {
      let index = sections.length;
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
      buttons.forEach(button => button.classList.remove('active'));
      if (sections[index]) {
          const activeButton = Array.from(buttons).find(button => button.getAttribute('data-target') === sections[index].id);
          if (activeButton) activeButton.classList.add('active');
      }
  });
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

