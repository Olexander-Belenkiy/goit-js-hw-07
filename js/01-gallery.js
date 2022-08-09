import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imagesMarkup);
galleryEl.addEventListener("click", onImegeClick);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

function onImegeClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscClose);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscClose);
      },
    }
  );
  function onEscClose(event) {
    const escKeyClose = "Escape";
    if (event.code === escKeyClose) {
      onModalClose();
    }
  }
  function onModalClose() {
    instance.close();
  }
  instance.show();
}

console.log(galleryItems);
