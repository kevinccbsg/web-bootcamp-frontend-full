import striptags from 'striptags';
import { openHeader, loadingRender } from './ui';
import img from './../images/default.jpg';

const API_URL = 'http://api.tvmaze.com/';
const SEARCH_API_URL = `${API_URL}search/shows?q=`;
const SHOWS_URL = `${API_URL}shows`;

const showsModule = () => {
  let shows = [];

  const getShows = async (query) => {
    try {
      const requestURL = query ? `${SEARCH_API_URL}${query}` : SHOWS_URL;
      const response = await fetch(requestURL);
      shows = await response.json();
      if (shows.status) {
        throw shows;
      }
      shows = shows.map(show => show.show ? show.show : show);
    } catch (e) {
      console.log('Error getting shows', e);
    }
  };

  const renderRating = (rate) => {
    const calcRate = rate * 3 / 10;
    const array = new Array(3).fill(`
      <button class="icon">
        <i class="far fa-star"></i>
      </button>
    `);
    const ratingHTML = array.map((obj, index) => {
      if (index < calcRate) {
        return `
          <button class="icon">
            <i class="fas fa-star"></i>
          </button>
        `;
      }
      return obj;
    }).join('');
    return ratingHTML;
  };

  const renderShow = ({ id, name, image, summary, principal, rating }) => `
    <div id="card-${id}" class="card ${principal ? 'principal' : 'secondary close'}">
      <header class="card-header">
        <a href="/detail.html?id=${id}">
          <h2>${name}</h2>
        </a>
      </header>
      <div class="card-content">
        <div class="card-content-image">
          <img src="${image ? image.medium : img}">
        </div>
        <div class="card-content-text">
          <p>${striptags(summary)}</p>
          <div class="rating-container">
            ${renderRating(rating.average)}
          </div>
        </div>
      </div>
    </div>
  `;

  const renderShows = (element, shows) => {
    const htmlShows = shows.slice(0, 6).map((show, index) => {
      if (index < 2) {
        return renderShow({ ...show, principal: true });
      }
      return renderShow({ ...show, principal: false });
    });
    element.innerHTML = htmlShows.join('');
    const headers = document.querySelectorAll('.card.secondary .card-header');
    headers.forEach((header, index) => {
      const id = header.parentNode.getAttribute('id');
      header.addEventListener('click', openHeader(id))
    });
    return;
  };

  const renderDOMShows = async (query) => {
    try {
      loadingRender('show-section', 'left-loader').render();
      await getShows(query);
      const showSection = document.getElementById('show-section');
      renderShows(showSection, shows);
    } catch (e) {
      console.log('Error', e);
    }
  };

  return {
    renderDOMShows,
    renderShows,
    shows: () => shows,
  };
};

let instance = null;

const showsInstance = () => {
  if (!instance) {
    instance = showsModule();
  }
  return instance;
};

showsInstance().renderDOMShows();

export default showsInstance;
