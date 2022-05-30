export const TemplateSwitch = (initialValue) => ({
    initial: initialValue,
    active: '',
    init() {
        this.active = this.initial;
    },
    show(payload) {
        this.active = payload
    }
});