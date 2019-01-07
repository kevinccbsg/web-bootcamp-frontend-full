import showsModule from './shows';

const filters = document.querySelectorAll('.filter-list button');

const removeFilters = () => {
  filters.forEach(filter => filter.classList.remove('selected'));
};

filters.forEach(filter => {
  filter.addEventListener('click', (evt) => {
    removeFilters();
    let shows = showsModule().shows();
    const filterValue = evt.target.dataset.filter;
    shows = shows.filter(show =>
      show.genres.includes(filterValue)
    );
    const showSection = document.getElementById('show-section');
    showsModule().renderShows(showSection, shows);
    evt.target.classList.toggle('selected');
  });
});

export {
  removeFilters,
};
