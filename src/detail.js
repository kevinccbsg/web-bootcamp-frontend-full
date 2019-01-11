import './styles/index.scss';
import './styles/detail.scss';
import img from './images/default.jpg';
import './js/quoteForm';
import quotesModule from './js/quotes';
import { loadingRender, errorRender } from './js/ui';

const API_URL = 'http://api.tvmaze.com/';
const SHOWS_URL = `${API_URL}shows`;
const QUOTES_URL = 'http://localhost:3000/api/v1/quote';

const detailTemplate = ({ id, name, summary, image }) => `
  <header id="${id}">
    <div class="title-section">
      <h1>${name}</h1>
    </div>
    <div class="image-container">
      <img src="${image ? image.original.replace('http', 'https') : img}">
    </div>
  </header>
  <div class="content">
    ${summary}
  </div>
`;

const renderDetail = async () => {
  try {
    const id = window.location.search ? window.location.search.split('=')[1] : '';
    const detail = document.getElementById('detail');
    document.getElementById('detailSection').classList.add('loading');
    const response = await fetch(`${SHOWS_URL}/${id}`);
    const show = await response.json();
    const quotesResponse = await fetch(`${QUOTES_URL}/${id}`);
    const quotes = await quotesResponse.json();
    if (show.status === 404) {
      throw show;
    }
    quotesModule().renderQuotes(quotes);
    document.getElementById('detailSection').classList.remove('loading');
    const showTemplate = detailTemplate(show);
    detail.innerHTML = showTemplate;
  } catch (e) {
    console.log('Error', e);
    errorRender('detailSection', e.message);
  }
};

renderDetail();

console.log('Detail');
