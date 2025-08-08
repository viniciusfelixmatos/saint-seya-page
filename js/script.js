// Menu hamburguer
document.getElementById('btn-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    const menu = document.getElementById('nav-list');
    menu.classList.toggle('show');
});

// Numeração nos dots do carrossel da home
function numberHomeDots(event) {
    const carousel = event.target;
    const dots = carousel.querySelectorAll(".owl-dot span");
    dots.forEach((dot, index) => {
        dot.textContent = index + 1;
    });
}

// Owl Carousel da Home
$('.home-carousel').owlCarousel({
    loop: true,
    center: true,
    margin: 10,
    dots: true,
    autoWidth: true,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
    },
    onInitialized: numberHomeDots
});

// Owl Carousel dos personagens
$('.characters-carousel').owlCarousel({
    loop: false,
    center: false,
    margin: 20,
    dots: false,
    autoWidth: true,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
        320: { items: 2 },
        600: { items: 3 },
        1000: { items: 6 }
    }
});

// Owl Carousel das casas
$('.houses-carousel').owlCarousel({
    loop: false,
    center: true,
    margin: 20,
    dots: true,
    nav: true,
    navText: [$('.am-next'), $('.am-prev')],
    autoWidth: true,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
        1000: { items: 1 }
    }
});

// Máscaras de entrada
$(document).ready(function () {
  $('#idade').mask('00');
  $('#altura').mask('0,00');

  $('#sangue').mask('S?X?[-+]', {
    translation: {
      'S': { pattern: /[ABO]/, optional: false },
      'X': { pattern: /[B]/, optional: true },
      '-': { pattern: /[-+]/, optional: false }
    },
    onKeyPress: function(val, e, field, options) {
      field.val(field.val().toUpperCase());
    }
  });
});

// arquivo: script.js
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  const inputs = form.querySelectorAll('input[required]');

  inputs.forEach(function(input) {
    const errorMessage = document.getElementById(input.id + '-id');

    if (!input.value.trim()) {
      errorMessage.style.display = 'block';
      isValid = false;
    } else {
      errorMessage.style.display = 'none';
    }
  });

});


