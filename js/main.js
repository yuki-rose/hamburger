jQuery( function($) {
    $(".js-menu__btn").on("click", function() {
        $(".l-side__base").addClass("is-open");
        $(".l-side__bg").addClass("is-open");
    });
});

jQuery( function($) {
    $(".p-menu__closebtn").on("click", function() {
        $(".l-side__base").removeClass("is-open");
        $(".l-side__bg").removeClass("is-open");
    });
});

jQuery( function($) {
    $(".l-side__bg").on("click", function() {
        $(".l-side__base").removeClass("is-open");
        $(".l-side__bg").removeClass("is-open");
    });
});

$(window).on("load resize", function() {
    let h = 0;
    $('.p-main__wrapperGrid-txtboxset').each(function() {
        if($(this).height() > h ){
            h = $(this).height();
        }
    });
    if (window.matchMedia('(max-width: 960px)').matches) {
        let ItemHeight = h + 298
        $('.p-main__wrapperGrid-item').height(ItemHeight);
    } else if (window.matchMedia('(max-width: 590px)').matches) {
        let ItemHeight = h + 341
        $('.p-main__wrapperGrid-item').height(ItemHeight);
    } else {
        let ItemHeight = h + 824
        $('.p-main__wrapperGrid-item').height(ItemHeight);
    }
});

$(window).on("load resize", function() {
    let mh = $('.p-map-txtset').height();
    let imgh = mh + 80
    $('.p-map-img').height(imgh);
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
        $('.l-side__base').height(sh);
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
        $('.l-side__base').height(sh); 
       }
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
        sbgh = parseInt(headerh) + parseInt(mainh) + parseInt(footerh);
        console.log(sbgh);
        $('.l-side__bg').height(sbgh);
    } else {
        let vw = $(window).width();
        console.log(vw);
        let headerh = $('.l-header').height();
        console.log(headerh);
        let mainh = $('.l-main').height();
        console.log(mainh);
        let footerh = $('.l-footer').outerHeight(true);
        console.log(footerh);
        sbgh = parseInt(headerh) + parseInt(mainh);
        console.log(sbgh);
        $('.l-side__bg').height(sbgh); 
       }
});

