import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">

    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>
    `;
    })
    .join("");
}
galleryEl.innerHTML = imagesMarkup;
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

console.log(galleryItems);
