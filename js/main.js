jQuery( function($) {
    $(".js-menu__btn").on("click", function() {
        $(".l-side__base").addClass("is-open");
        $(".l-side__bg").addClass("is-open");
        $("body").css({overflow: "hidden" });
    });
});

jQuery( function($) {
    $(".p-menu__closebtn").on("click", function() {
        $(".l-side__base").removeClass("is-open");
        $(".l-side__bg").removeClass("is-open");
        $("body").css({overflow: "auto" });
    });
});

jQuery( function($) {
    $(".l-side__bg").on("click", function() {
        $(".l-side__base").removeClass("is-open");
        $(".l-side__bg").removeClass("is-open");
    });
});

$(window).on("load resize", function() { 
    let vw = $(window).width();
    console.log(vw);
    let bp = 960;
    if (vw <= bp) {
        //let headerh = $('.l-header').height();
        //console.log(headerh);
        //let mainh = $('.l-main').outerHeight(true);
        //console.log(mainh);
        //let footerh = $('.l-footer').outerHeight(true);
        //console.log(footerh);
        //sh = parseInt(headerh) + parseInt(mainh) + parseInt(footerh);
        //console.log(sh);
        //$('.l-side__base').height(sh);
        ;
    } else {
        let vw = $(window).width();
        console.log(vw);
        let headerh = $('.l-header').height();
        console.log(headerh);
        let mainh = $('.l-main').outerHeight(true);
        console.log(mainh);
        let footerh = $('.l-footer').outerHeight(true);
        console.log(footerh);
        sh = parseInt(headerh) + parseInt(mainh) - 20;
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
        let mainh = $('.l-main').outerHeight(true);
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
        let mainh = $('.l-main').outerHeight(true);
        console.log(mainh);
        let footerh = $('.l-footer').outerHeight(true);
        console.log(footerh);
        sbgh = parseInt(headerh) + parseInt(mainh);
        console.log(sbgh);
        $('.l-side__bg').height(sbgh); 
       }
});

