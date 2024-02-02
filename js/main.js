jQuery( function($) {
    $(".js-menu__btn").on("click", function() {
        $(".l-side").toggleClass("is-open");
    });
});

$(window).resize(function( ){
    let h = 0;
    $('.l-main__wrapperGrid-txtboxset').each(function() {
        if($(this).height() > h ){
            h = $(this).height();
        }
    });
    let ItemHeight = h +314
    $('.l-main__wrapperGrid-item').height(ItemHeight);
});

$(window).resize(function() {
    let mh = $('.l-main__map-txtset').height();
let imgh = mh + 80
$('.l-main__map-img').height(imgh);
});