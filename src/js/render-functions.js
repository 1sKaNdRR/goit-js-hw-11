import iziToast from "izitoast";

export function renderGallery(images) {
    const galleryElement = document.getElementById('gallery');
    galleryElement.innerHTML = '';

    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = image.webformatURL;
        imageElement.alt = image.tags;
        galleryElement.appendChild(imageElement);
        const imageComments = document.createElement('div');
        imageComments.innerHTML = image.comments;
        imageElement.appendChild(imageComments)
    });
}

export function showErrorMessage(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight'
    });
}


export const createGalleryItemMarkup = images => {
    return images
        .map(({ preview, original, description }) =>
            `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img class="gallery-image" src="${preview}" alt="${description}" />
  </a>
</li>
`
        ).join("");
    gallery.innerHTML = markup;
}
