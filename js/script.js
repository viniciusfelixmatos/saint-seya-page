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

$(document).ready(function($) {
    $('#altura').mask('9,99m');  
});

const formcvz = document.querySelector('.c__join__form')

const inputs = [
    {
        input: document.getElementById("name"),
        errorMessage: document.getElementById("name-id")
    },
    {
        input: document.getElementById("email"),
        errorMessage: document.getElementById("email-id")
    },
    {
        input: document.getElementById("idade"),
        errorMessage: document.getElementById("idade-id")
    },
    {
        input: document.getElementById("altura"),
        errorMessage: document.getElementById("altura-id")
    },
    {
        input: document.getElementById("peso"),
        errorMessage: document.getElementById("peso-id")
    },
    {
        input: document.getElementById("nascimento"),
        errorMessage: document.getElementById("nascimento-id")
    },
    {
        input: document.getElementById("sangue"),
        errorMessage: document.getElementById("sangue-id")
    },
    {
        input: document.getElementById("nasc_local"),
        errorMessage: document.getElementById("nascimento-id")
    },
    {
        input: document.getElementById("treino_local"),
        errorMessage: document.getElementById("treino-id")
    }
]

console.log(inputs);

formcvz.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(({input, errorMessage}) => {
        if(input.value.trim() === '') {
            errorMessage.style.display = 'flex';
            input.style.borderColor = 'red';
        } else {
           errorMessage.style.display = 'flex';
           input.style.borderColor = 'red';
        }
    });
});


