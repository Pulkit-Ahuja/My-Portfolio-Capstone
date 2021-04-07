var lastScrollTop = 0;
$(document).ready(function () {

    function refresh(){
        var st = $(window).scrollTop();
        var windowBottom = $(window).scrollTop() + $(window).height();
        $(".fade-down").each(function () {
            /* Check the location of each desired element */
            var objectTop = $(this).offset().top;
            if (st > lastScrollTop) {
                if (objectTop + 40 < windowBottom && ($(this).css("opacity") == 0)) {
                    $(this).animate({ marginTop: "0px" }, { duration:800, queue: false })
                    $(this).animate({ marginBottom: "0px" }, { duration: 800, queue: false });
                    $(this).animate({ opacity: 1 }, { duration:800, queue: false });
                }
            }
        });
        lastScrollTop = st;
    }
    $(window).scroll(function () {
        refresh();
    }).scroll(); //invoke scroll-handler on page-load
});