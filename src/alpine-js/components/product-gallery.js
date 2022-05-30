export const ProductGallery = () => ({
    initialRender: true,
    currentImage: null,
    switchImage($el) {
        this.initialRender = false;
        this.currentImage = {
            url: $el.target.dataset.url,
            alt: $el.target.dataset.alt || ''
        }
    }
});