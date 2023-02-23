$(window).scroll(function() {
    var scrolltop = $(document).scrollTop()
    var toggle = false;
    console.log(scrolltop);
    if (scrolltop >= 500 && toggle == false) {
        $('.header .nav').addClass('nav-scroll').addClass('nav-animation')
        toggle = true
    }
    if (scrolltop <= 500) {
        $('.header .nav').removeClass('nav-scroll').removeClass('nav-animation')
        toggle = false
    }
})