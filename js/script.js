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

// Mensagem personalizada para os inputs do formulário de cadastro
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.c__join__form');
    if (!form) return;

    const fields = [
        { id: 'name', message: 'Por favor, use apenas letras e espaços para o nome.' },
        { id: 'email', message: 'Digite um e-mail válido.' },
        { id: 'idade', message: 'Digite uma idade entre 1 e 99.' },
        { id: 'altura', message: 'Digite sua altura no formato 0.00 (ex: 1.75).' },
        { id: 'peso', message: 'Digite um peso válido, como 70 ou 70.5.' },
        { id: 'nascimento', message: 'Formato válido: DD/MM ou DD-MM (ex: 25/12).' },
        { id: 'sangue', message: 'Exemplos válidos: A+, O-, AB+, etc.' },
        { id: 'nasc_local', message: 'Use apenas letras e espaços.' },
        { id: 'treino_local', message: 'Use apenas letras e espaços.' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!input) return;

        input.addEventListener('input', () => input.setCustomValidity(''));

        input.addEventListener('invalid', () => {
            if (!input.validity.valid) {
                input.setCustomValidity(field.message);
            }
        });
    });

    form.addEventListener('submit', function (e) {
        if (!form.checkValidity()) {
            e.preventDefault();
        }
    });
});
