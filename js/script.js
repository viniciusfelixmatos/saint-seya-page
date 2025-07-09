document.addEventListener("DOMContentLoaded", () => {

    // Button hamburguer //
    const button = document.getElementById('hamburguerbtn')
    const links = document.getElementById('linksul')


    if (button && links) {
        button.addEventListener("click", function () {
            button.classList.toggle('active');
            links.classList.toggle('active');
        });
    }
    console.log();

    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 10,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    const buttonsowl = document.querySelectorAll(".owl-dot span");
    let i = 0;
    for (i; i < buttonsowl.length; i++) {
        console.log(i)
        console.log(buttonsowl[i])
        buttonsowl[i].innerHTML = i+1;
    };
});

