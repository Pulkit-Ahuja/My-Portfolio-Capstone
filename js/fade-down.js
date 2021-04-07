var lastScrollTop = 0;
$(document).ready(function () {
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        var windowBottom = $(window).scrollTop() + $(window).height();
        var windowTop = $(window).scrollTop();
        $(".fade-down").each(function () {
            /* Check the location of each desired element */
            var objectTop = $(this).offset().top;
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if (st > lastScrollTop) {
                if (objectTop + 40 < windowBottom && ($(this).css("opacity") == 0)) {
                    $(this).animate({ marginTop: "0px" }, { duration: "1000", queue: false });
                    $(this).animate({ opacity: 1 }, { duration: "1000", queue: false });
                }
                else if (objectBottom - 40 < st && ($(this).css("opacity") == 1)) {
                    console.log("Due to scroll Up");
                    $(this).animate({ marginTop: "-40px" }, { duration: "1000", queue: false });
                    $(this).animate({ opacity: 0 }, { duration: "1000", queue: false });
                }
            }

            if (st < lastScrollTop) {
                if (objectBottom - st >= 40 && objectBottom < windowBottom && ($(this).css("opacity") == 0)) {
                    $(this).animate({ marginTop: "0px" }, { duration: "1000", queue: false });
                    $(this).animate({ opacity: 1 }, { duration: "1000", queue: false });
                }

                else if (objectTop + 30 >= windowBottom && ($(this).css("opacity") == 1)) {
                    $(this).animate({ marginTop: "-40px" }, { duration: "1000", queue: false });
                    $(this).animate({ opacity: 0 }, { duration: "1000", queue: false });
                }
            }
        });
        lastScrollTop = st;
    }).scroll(); //invoke scroll-handler on page-load
});