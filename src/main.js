import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.getElementById('search-query').value.trim();

  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term!' });
    return;
  }

  clearGallery();  
  showLoader();  

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.error({ title: 'Error', message: 'No images found for this query!' });
    } else {
      renderGallery(images);
      iziToast.success({ title: 'Success', message: `Found ${images.length} images!` });
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong. Try again later.' });
  } finally {
    hideLoader();  
  }
});

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
