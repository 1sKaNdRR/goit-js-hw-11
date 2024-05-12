
// import iziToast from "izitoast";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";


// export function renderGallery(images) {
//     const galleryElement = document.getElementById('gallery');
//     galleryElement.innerHTML = '';

//     images.forEach(image => {
//         const imageElement = document.createElement('img');
//         imageElement.src = image.webformatURL;
//         imageElement.alt = image.tags;
//         galleryElement.appendChild(imageElement);
//     });

//     // Чекаємо, коли весь контент буде завантажено
//     window.addEventListener('load', () => {
//         // Ініціалізуємо SimpleLightbox
//         const lightbox = new SimpleLightbox('#gallery a', {
//             captionsData: 'alt',
//             captionsDelay: 250,
//         });
        
//     });

// }


// export function showErrorMessage(message) {
//     iziToast.error({
//         title: 'Error',
//         message: message,
//         position: 'topRight'
//     });
// }


// export const createGalleryItemMarkup = images => {
//     return images
//         .map(({ preview, largeImageURL, description, likes, downloads, comments, views }) =>
//             `
// <li class="gallery-item">
//   <a class="gallery-link" href="${largeImageURL}">
//     <img class="gallery-image" src="${preview}" alt="${description}" />
//     </a>
//     <p class="image-info">Likes: ${likes}</p>
//     <p class="image-info">Downloads: ${downloads}</p>
//     <p class="image-info">Comments: ${comments}</p>
//     <p class="image-info">Views: ${views}</p>
  
// </li>
// `
//         ).join("");
// }




export const createMarkup = images => {
  return images.reduce(
    (
      html,
      { tags, webformatURL, largeImageURL, likes, views, comments, downloads }
    ) => {
      return (
        html +
        `<li class="photo-container">
    <a href=${largeImageURL} class="card-link js-card-link">
        <img class="photo" src="${webformatURL}" alt="${tags}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${likes}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${views}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${comments}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${downloads}</span>
        </div>
    </div>
</li>
    `
      );
    },
    ''
  );
};






