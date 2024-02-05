jQuery( function($) {
    $(".js-menu__btn").on("click", function() {
        $(".l-side").toggleClass("is-open");
    });
});

$(window).on("load resize", function() {
    let h = 0;
    $('.l-main__wrapperGrid-txtboxset').each(function() {
        if($(this).height() > h ){
            h = $(this).height();
        }
    });
    if (window.matchMedia('(max-width: 960px)').matches) {
        let ItemHeight = h + 298
        $('.l-main__wrapperGrid-item').height(ItemHeight);
    } else if (window.matchMedia('(max-width: 590px)').matches) {
        let ItemHeight = h + 341
        $('.l-main__wrapperGrid-item').height(ItemHeight);
    } else {
        let ItemHeight = h + 824
        $('.l-main__wrapperGrid-item').height(ItemHeight);
    }
});

$(window).on("load resize", function() {
    let mh = $('.l-main__map-txtset').height();
    let imgh = mh + 80
    $('.l-main__map-img').height(imgh);
});

$(window).on("load resize", function() { 
    let vw = $(window).width();
    console.log(vw);
    let bp = 960;
    if (vw <= bp) {
        let headerh = $('.l-header').height();
        console.log(headerh);
        let mainh = $('.l-main').height();
        console.log(mainh);
        let footerh = $('.l-footer').outerHeight(true);
        console.log(footerh);
        sh = parseInt(headerh) + parseInt(mainh) + parseInt(footerh);
        console.log(sh);
        $('.l-side').height(sh);
    } else {
        let vw = $(window).width();
        console.log(vw);
        let headerh = $('.l-header').height();
        console.log(headerh);
        let mainh = $('.l-main').height();
        console.log(mainh);
        let footerh = $('.l-footer').outerHeight(true);
        console.log(footerh);
        sh = parseInt(headerh) + parseInt(mainh);
        console.log(sh);
        $('.l-side').height(sh); 
       }
});
