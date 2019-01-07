import showsModule from './shows';
import { removeFilters } from './filters';
import storageModule from './storage';
// renderDOMShows

const storage = storageModule();

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('.input.search');

const searchBar = (value = '') => {
  searchInput.value = value;
  searchInput.addEventListener('change', (evt) => {
    searchInput.value = evt.target.value;
    storage.setItem('searchInput', evt.target.value);
  });
  searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (searchInput.value !== '') {
      showsModule().renderDOMShows(searchInput.value);
      removeFilters();
    }
  });
};

searchBar(storage.getItem('searchInput'));
