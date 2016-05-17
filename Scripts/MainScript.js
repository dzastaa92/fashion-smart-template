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


$(document).ready(function () {


    var progress_circles = $('.main_container')
    var distance = (progress_circles.offset().top - $(window).scrollTop())/3;

    progress_circles.each(function () {
            var elem = $(this);
            var progressbar = elem.find('.progress_bar');
            var max = progressbar.attr('max');
            var time = (1000 / max) * 5;
            var value = progressbar.val();

            var loading = function () {
                value += 1;

                elem.find($('.progress-value')).html(value);
                var $ppc = elem.find($('.progress-pie-chart')),
                    deg = 360 * value / 100;
                if (value > 50) {
                    $ppc.addClass('gt-50');
                }

                elem.find($('.ppc-progress-fill')).css('transform', 'rotate(' + deg + 'deg)');
                elem.find($('.ppc-percents span')).html(value);

                if (value == max) {
                    clearInterval(animate);
                }
            };

            var animate = setInterval(function () {
                if (value < max) {
                    if($(document).scrollTop() >= distance)
                        loading();
                }
            }, time);
        }
    );


    //window and animation items
    var animation_elements = $('.brands-element, .ourTeam-element, .portfolio-element, .footer-container div, .section-container');
    var web_window = $(window);

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        //iterate through elements to see if its in view
        $.each(animation_elements, function () {

            //get the elements information
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass('in-view');
            }
        });

    }

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
        check_if_in_view()
    });
    //trigger our scroll event on initial load
    $(window).trigger('scroll');


});

$(function () {
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
        $('.navbar-toggle:visible').click();
    });
});