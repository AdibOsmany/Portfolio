document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const headerButtons = document.querySelectorAll('.nav-button');

  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  headerButtons.forEach((button) => button.classList.remove('active'));
  if (sections[index]) {
      const activeButton = document.getElementById(sections[index].id.split('-')[0]);
      if (activeButton) activeButton.classList.add('active');
  }
});
