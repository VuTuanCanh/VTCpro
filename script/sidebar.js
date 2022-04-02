// basic - addvanced
$('.advanced').click(function() {
    $(this).addClass('main-css');
    $('.basic').removeClass('main-css');
});
$('.basic').click(function() {
    $(this).addClass('main-css');
    $('.advanced').removeClass('main-css');
});


// demand
$('.title-demand').click(function() {
    $('.list-demand').slideToggle('slow');
    // show or hide
    $('.hide-demand').toggle();
});
// brand
$('.title-brand').click(function() {
    $('.list-brand').slideToggle('slow');
    // show or hide
    $('.hide-brand').toggle();
});
// source-product
$('.title-source-product').click(function() {
    $('.list-source-product').slideToggle('slow');
    // show or hide
    $('.hide-source-product').toggle();
});
// status-product
$('.title-status-product').click(function() {
    $('.list-status-product').slideToggle('slow');
    // show or hide
    $('.hide-status-product').toggle();
});
// cpu
$('.title-cpu').click(function() {
    $('.list-cpu').slideToggle('slow');
    // show or hide
    $('.hide-cpu').toggle();
});
// ram
$('.title-ram').click(function() {
    $('.list-ram').slideToggle('slow');
    // show or hide
    $('.hide-ram').toggle();
});
// hardDrive
$('.title-hardDrive').click(function() {
    $('.list-hardDrive').slideToggle('slow');
    // show or hide
    $('.hide-hardDrive').toggle();
});
// capacity
$('.title-capacity').click(function() {
    $('.list-capacity').slideToggle('slow');
    // show or hide
    $('.hide-capacity').toggle();
});
// gpu
$('.title-gpu').click(function() {
    $('.list-gpu').slideToggle('slow');
    // show or hide
    $('.hide-gpu').toggle();
});
// optionGpu
$('.title-optionGpu').click(function() {
    $('.list-optionGpu').slideToggle('slow');
    // show or hide
    $('.hide-optionGpu').toggle();
});
// screenSize
$('.title-screenSize').click(function() {
    $('.list-screenSize').slideToggle('slow');
    // show or hide
    $('.hide-screenSize').toggle();
});
// weight
$('.title-weight').click(function() {
    $('.list-weight').slideToggle('slow');
    // show or hide
    $('.hide-weight').toggle();
});
// color
$('.title-color').click(function() {
    $('.list-color').slideToggle('slow');
    // show or hide
    $('.hide-color').toggle();
});