import storageModule from './storage';
import quotesModule from './quotes';

const quoteForm = document.querySelector('#quote-form');
const quoteInput = document.querySelector('#quote');

const storage = storageModule();

const QUOTES_URL = 'http://localhost:3000/api/v1/quote';

const quoteBar = (value = '') => {
  quoteInput.value = value;
  quoteInput.addEventListener('change', (evt) => {
    quoteInput.value = evt.target.value;
    storage.setItem('quote', evt.target.value);
  });
  quoteForm.addEventListener('submit', async (evt) => {
    const id = window.location.search ? window.location.search.split('=')[1] : '';
    evt.preventDefault();
    if (quoteInput.value !== '') {
      // send value
      try {
        const quotesResponse = await fetch(`${QUOTES_URL}/${id}`, {
          method: 'POST',
          body: JSON.stringify({ quote: quoteInput.value }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const quote = await quotesResponse.json();
        const quotes = quotesModule().getQuotes();
        quotesModule().renderQuotes(quotes.concat(quote));
      } catch (e) {
        console.log('Error', e);
      }
    }
  });
};

quoteBar(storage.getItem('quote'));
