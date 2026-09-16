const filterButtons = document.querySelectorAll('.filter-button');
const menuSections = document.querySelectorAll('main section[data-category]');
const filterMessage = document.querySelector('#filter-message');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove('active-filter');
    });
    button.classList.add('active-filter');

    menuSections.forEach((section) => {
      const shouldShow = filter === 'all' || section.dataset.category === filter;
      section.classList.toggle('hidden-section', !shouldShow);
    });

    filterMessage.textContent = filter === 'all'
      ? 'Showing all menu items.'
      : `Showing ${button.textContent}.`;
  });
});
