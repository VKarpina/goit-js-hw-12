import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import pixabayAPI from './js/pixabay-api';
import renderFunction from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form-container');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.query.value.trim();
  if (inputValue === '') {
    return;
  }
  showElement(loader);

  pixabayAPI(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({ message: 'Photos not found, try another query' });
        return;
      }
      gallery.innerHTML = renderFunction(data.hits);
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      iziToast.error({ message: 'Something went wrong' });
    })
    .finally(() => {
      hideElement(loader);
      form.reset();
    });
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}
