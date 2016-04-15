$(window).scroll(function () {
    var scroll = $(window).scrollTop();


    if (scroll >= 200) {
        $('.nav-icons').removeClass('nav-up').addClass('nav-down');
        $('#navigation').addClass('navOnScroll');

    }
    else {
        $('.nav-icons').removeClass('nav-down').addClass('nav-up');
        $('#navigation').removeClass('navOnScroll');

    }
});


$(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});