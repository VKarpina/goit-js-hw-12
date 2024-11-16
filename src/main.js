import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import pixabayAPI from './js/pixabay-api';
import renderFunction from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form-container');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');

form.addEventListener('submit', handleSearch);
loadBtn.addEventListener('click', onLoadBtn);

let page = 1;
const perPage = 15;
let inputValue;

hideElement(loadBtn);

async function handleSearch(event) {
  event.preventDefault();

  inputValue = event.currentTarget.elements.query.value.trim();
  if (inputValue === '') {
    return;
  }
  showElement(loader);

  try {
    const data = await pixabayAPI(inputValue, page, perPage);
    if (data.hits.length === 0) {
      iziToast.info({ message: 'Photos not found, try another query' });
      return;
    }
    form.reset();
    gallery.innerHTML = renderFunction(data.hits);

    if (page * perPage >= data.totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      hideElement(loadBtn);
    } else {
      showElement(loadBtn);
    }
    lightbox.refresh();
  } catch (error) {
    iziToast.error({ message: 'Something went wrong' });
  } finally {
    hideElement(loader);
  }
}

async function onLoadBtn() {
  page += 1;
  loadBtn.disabled = true;

  try {
    const data = await pixabayAPI(inputValue, page, perPage);
    console.log(data);
    gallery.insertAdjacentHTML('beforeend', renderFunction(data.hits));
    lightbox.refresh();
    if (page * perPage >= data.totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      hideElement(loadBtn);
    } else {
      showElement(loadBtn);
    }

    const card = document.querySelector('.gallery-card');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({ message: 'Something went wrong' });
  } finally {
    loadBtn.disabled = false;
  }
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}
