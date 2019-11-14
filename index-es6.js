((global) => {
  class Modal {
    constructor(classNameForVisibility) {
      this.modalWindows = document.querySelectorAll('[modalName]');
      this.openModalButtons = document.querySelectorAll('[openModal]');
      this.closeModalButtons = document.querySelectorAll('[closeModal]');
      this.classNameForVisibility = classNameForVisibility || 'js-is-visible';
      this.addVisibilityOnClick();
      this.hideVisibilityOnClick();
    }

    addVisibility(name) {
      document.querySelector(`[modalName="${name}"]`).classList.add(this.classNameForVisibility);
    }

    hideVisibility(name) {
      document.querySelector(`[modalName="${name}"]`).classList.remove(this.classNameForVisibility);
    }

    addVisibilityOnClick() {
      this.openModalButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          this.addVisibility(e.target.getAttribute('openModal'));
        });
      });
    }

    hideVisibilityOnClick() {
      this.closeModalButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          this.hideVisibility(e.target.getAttribute('closeModal'));
        });
      });
    }
  }
  // eslint-disable-next-line no-param-reassign
  global.Modal = Modal;
})(window);
