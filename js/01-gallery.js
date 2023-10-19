import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
const item = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link"  href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}).join("");
gallery.insertAdjacentHTML("afterbegin", item)
gallery.addEventListener("click", imageClick)

function imageClick(event) {
     event.preventDefault();
     const target = event.target;
     if (target.classList.contains('gallery__image')) {
         const originalImageUrl = target.dataset.source;
         const modal = basicLightbox.create(`
         <img 
         src="${originalImageUrl}" 
         >
         `);
      modal.show();
      
     }
}
