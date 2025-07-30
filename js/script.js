document.getElementById('btn-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    const menu = document.getElementById('nav-list');
    menu.classList.toggle('show');
});

function numberHomeDots(event) {
    const carousel = event.target;
    const dots = carousel.querySelectorAll(".owl-dot span");
    dots.forEach((dot, index) => {
        dot.textContent = index + 1;
    });
}

$('.home-carousel').owlCarousel({
    loop: true,
    center: true,
    margin: 10,
    dots: true,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
    },
    onInitialized: numberHomeDots
});

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

