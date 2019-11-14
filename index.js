/* eslint-disable */

;(function(global) {

  function Modal(classNameForVisibility) {
      this.modalWindows = document.querySelectorAll('[modalName]');
      this.openModalButtons =  document.querySelectorAll('[openModal]');
      this.closeModalButtons = document.querySelectorAll('[closeModal]');
      this.classNameForVisibility = classNameForVisibility || 'js-is-visible';
      
      this.addVisibilityOnClick();
      this.hideVisibilityOnClick();
  }

  Modal.prototype = {
      addVisibility: function(name) {
          document.querySelector(`[modalName="${name}"]`).classList.add(this.classNameForVisibility);
      },

      hideVisibility: function(name) {
          document.querySelector(`[modalName="${name}"]`).classList.remove(this.classNameForVisibility);
      },

      addVisibilityOnClick: function() {
          this.openModalButtons.forEach((button) => 
              button.addEventListener('click', (e) => this.addVisibility(e.target.getAttribute('openModal')))
          );
      },

      hideVisibilityOnClick: function() {
          this.closeModalButtons.forEach((button) => 
              button.addEventListener('click', (e) => this.hideVisibility(e.target.getAttribute('closeModal')))
          );
      },

  }

  global.Modal = Modal;
})(window)
