import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showErrorMessage } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
        showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
        return;
    }

    try {
        const images = await fetchImages(searchTerm);
        console.log(images)
        renderGallery(images);
    } catch (error) {
        showErrorMessage('Failed to fetch images. Please try again.');
    }
});


