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
    center: false,
    margin: 10,
    dots: false,
    touchDrag: true,
    mouseDrag: true,
    responsive:{
        0:{ items:1 },
        600:{ items:1 },
        1000:{ items:6 }
    }
});


const buttonsowl = document.querySelectorAll(".owl-dot span");
    let i = 0;
    for (i; i < buttonsowl.length; i++) {
        console.log(i)
        console.log(buttonsowl[i])
        buttonsowl[i].innerHTML = i+1;
    };

