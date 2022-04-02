function runSlide() {
    handleHeaderSlideshow();
    handleSlideshowBrand();
}
runSlide();


// slide header
function handleHeaderSlideshow() {
    var headerSlideshowListItem = document.querySelector('.header-slideshow__list-item');
    var btnPrevious = document.querySelector('.previous');
    var btnNext = document.querySelector('.next');

    var count = 0;
    var sizeHeader = headerSlideshowListItem.clientWidth;


    btnNext.addEventListener('click', function() {
        if (count > 1) {
            return;
        }
        headerSlideshowListItem.style.transition = 'transform 0.5s ease-in-out';
        count++;
        headerSlideshowListItem.style.transform = 'translateX(' + (-sizeHeader * count) / 3 + 'px)';
    });
    btnPrevious.addEventListener('click', function() {
        if (count < 1) {
            return;
        }
        headerSlideshowListItem.style.transition = 'transform 0.5s ease-in-out';
        count--;
        headerSlideshowListItem.style.transform = 'translateX(' + (-sizeHeader * count) / 3 + 'px)';
    });
}




// slide brand
function handleSlideshowBrand() {
    var listBrand = document.querySelector('.list-brand');
    var previousBrand = document.querySelector('.previous-brand');
    var nextBrand = document.querySelector('.next-brand');

    nextBrand.addEventListener('click', function() {
        listBrand.style.transition = 'transform 0.5s ease-in-out';
        listBrand.style.transform = 'translateX(-300px)';
    });
    previousBrand.addEventListener('click', function() {
        listBrand.style.transition = 'transform 0.5s ease-in-out';
        listBrand.style.transform = 'translateX(0px)';
    });
}