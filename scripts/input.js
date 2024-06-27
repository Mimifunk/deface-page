document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.input-container .input');
    const popupContainer = document.getElementById('popupContainer');
    const autoPopupContainer = document.getElementById('autoPopupContainer');
  
    setTimeout(function() {
      autoPopupContainer.style.display = 'block';
  
      setTimeout(function() {
        autoPopupContainer.style.display = 'none';
      }, 5000);
    }, 15000);
  
    setTimeout(function() {
      inputField.value = 'sudo nano defaced.txt';
      const enterEvent = new KeyboardEvent('keyup', { key: 'Enter' });
      inputField.dispatchEvent(enterEvent);
    }, 30000);
  
    inputField.addEventListener('keyup', function(event) {
      const inputValue = event.target.value.trim();
      if (inputValue === 'sudo nano defaced.txt') {
        popupContainer.style.display = 'block';
      } else {
        popupContainer.style.display = 'none';
      }
    });
  });
  
  function closePopup() {
    popupContainer.style.display = 'none';
  }
  