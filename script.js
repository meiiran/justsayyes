document.addEventListener('DOMContentLoaded', () => {
  const popupContent = {
    yes: {
      image: "images/smile1.jpg",
      text: "^-^️"
    },
    no: {
      image: "images/cry1.jpg",
      text: "不准选这个..."
    }
  };

  const buttons = document.querySelectorAll('.bubble');
  const popup = document.getElementById('popup');
  const popupImage = document.querySelector('.popup-image');
  const popupText = document.querySelector('.popup-text');
  const closeBtn = document.querySelector('.close-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const type = button.dataset.type;
      if (popupContent[type]) {
        popupImage.src = popupContent[type].image;
        popupText.textContent = popupContent[type].text;
        popup.style.display = 'flex';
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});