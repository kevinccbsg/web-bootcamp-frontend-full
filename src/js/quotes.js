import moment from 'moment';
import escapeHTML from 'escape-html';

const quoteTemplate = ({ quote, date }) => `
  <div class="list-item">
    <p>${escapeHTML(quote)}</p>
    <span>${moment(date).fromNow()}</span>
  </div>
`;

const quotesModule = () => {
  let quotes = [];

  return {
    renderQuotes: (newQuotes) => {
      quotes = newQuotes;
      let quotesTemplate = `<div>There is no quotes</div>`;
      if (quotes.length > 0) {
        quotesTemplate = quotes.map(quote => quoteTemplate(quote)).join('');
      }
      const quoteElement = document.getElementById('quoteList');
      quoteElement.innerHTML = quotesTemplate;
    },
    getQuotes: () => quotes,
  };
};

let instance = null;

const quotesInstance = () => {
  if (!instance) {
    instance = quotesModule();
  }
  return instance;
};

export default quotesInstance;
