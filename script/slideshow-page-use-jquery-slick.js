$(document).ready(function() {
    $('.main-top__page-ad__slideshow-page__list-item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.previous-page',
        nextArrow: '.next-page',
        autoplay: true,
        autoplaySpeed: 3000
    });
});