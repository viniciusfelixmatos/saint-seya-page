document.getElementById('btn-menu').addEventListener('click', function() {
    this.classList.toggle('active');

    // Alterna visibilidade do menu
    const menu = document.getElementById('nav-list');
    menu.classList.toggle('show');
  });  

    $('.home-carousel').owlCarousel({
    loop:true,
    center: true,
    margin:10,
    dots: true,
    touchDrag: false,
    mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.characters-carousel').owlCarousel({
    loop: false,
    center: true,
    margin: 20,
    dots: false,
    autoWidth:true,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
        320: { items: 2},
        600:{ items:3 },
        1000:{ items:6 }
    }
});

$('.houses-carousel').owlCarousel({
    loop: false,
    center: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [$('.am-next'),$('.am-prev')],
    autoWidth:true,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
        1000:{ items:1 }
    }
});


const buttonsowl = document.querySelectorAll(".owl-dot span");
    let i = 0;
    for (i; i < buttonsowl.length; i++) {
        console.log(i)
        console.log(buttonsowl[i])
        buttonsowl[i].innerHTML = i+1;
    };

