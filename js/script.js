document.addEventListener("DOMContentLoaded",() => {

    $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    center: true,
    items:1,
    dotsEach: true,
});

    /*$('.owl-carousel').find('.carousel-item').each(function() {
    var imgContainer = $(this),
        bkImg = imgContainer.find('img').attr('src');
    imgContainer.css("background-image", 'url("' + bkImg + '")');
    });*/

        $('.owl-carousel').each(function() {
        //Find each set of dots in this carousel
    $(this).find('.owl-dot').each(function(index) {
        //Add one to index so it starts from 1
        $(this).attr('aria-label', index + 1);
    });
    });


});