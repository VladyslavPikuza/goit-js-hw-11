import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.getElementById('gallery');
  
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views }) => {
    return `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" />
        <div class="info">
          <p>Likes: ${likes}</p>
          <p>Views: ${views}</p>
        </div>
      </a>`;
  }).join('');
  
  gallery.innerHTML = markup;
  
  
  const lightbox = new SimpleLightbox('.gallery-item', { captionsData: 'alt', captionDelay: 250 });
  lightbox.refresh();

  console.log("renderGallery function called");
}

export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  console.log("clearGallery function called");
}



