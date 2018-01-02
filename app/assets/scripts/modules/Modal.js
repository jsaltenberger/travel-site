import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");

        this.registerEvents();
    }

    registerEvents() {
        this.openModalButton.click(this.openModal.bind(this));
        this.closeModalButton.click(this.closeModal.bind(this));

        $(document).keyup(this.keyPressHandler.bind(this));
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
        return false;
    }

    keyPressHandler(evt) {
        if (evt.keyCode === 27) {
            this.closeModal();
        }
    }

}

export default Modal;