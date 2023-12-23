var buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    var parent = button.closest('.blog-item');
    var icon = button.querySelector('i');
    
    switch (icon.classList.value) {
      case 'fa-solid fa-thumbs-up fa-xl':
        icon.style.color = icon.style.color === 'blue' ? 'grey' : 'blue';
        break;
      case 'fa-solid fa-heart fa-xl':
        icon.style.color = icon.style.color === 'red' ? 'grey' : 'red';
        break;
      case 'fa-solid fa-face-smile fa-xl':
      case 'fa-solid fa-face-sad-tear fa-xl':
        icon.style.color = icon.style.color === 'yellow' ? 'grey' : 'yellow';
        break;
      case 'fa-solid fa-face-angry fa-xl':
        icon.style.color = icon.style.color === 'red' ? 'grey' : 'red';
        break;
    }

    parent.classList.add('reacted');
  });
});

// Optional: Reset all buttons and images to default state
function resetButtonsAndImages() {
  buttons.forEach(function (button) {
    var icon = button.querySelector('i');
    icon.style.color = 'grey'; // Reset all buttons to default color
  });

  var reactedImages = document.querySelectorAll('.reacted');
  reactedImages.forEach(function (image) {
    image.classList.remove('reacted'); // Reset all images to default state
  });
}
