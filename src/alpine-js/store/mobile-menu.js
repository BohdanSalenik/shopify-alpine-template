export const mobileMenu = {
    visible: false,
    toggle() {
        this.visible = !this.visible;
    },

    show() {
        this.visible = true;
    },

    hide() {
        this.visible = false;
    }
}