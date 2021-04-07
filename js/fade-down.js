var lastScrollTop = 0;
$(document).ready(function () {
    function refresh(){
        var st = $(window).scrollTop();
        var windowBottom = $(window).scrollTop() + $(window).height();
        $(".fade-down").each(function () {
            /* Check the location of each desired element */
            var objectTop = $(this).offset().top;
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if (st > lastScrollTop) {
                if (objectTop + 40 < windowBottom && ($(this).css("opacity") == 0)) {
                    $(this).animate({ marginTop: "0px" }, { duration:800, queue: false })
                    $(this).animate({ marginBottom: "0px" }, { duration: 800, queue: false });
                    $(this).animate({ opacity: 1 }, { duration:800, queue: false });
                }
                else if (objectBottom - 40 < st && ($(this).css("opacity") == 1)) {
                    $(this).animate({ marginTop: "-40px" }, { duration: 800, queue: false })
                    $(this).animate({ marginBottom: "40px" }, { duration: 800, queue: false });
                    $(this).animate({ opacity: 0 }, { duration: 800, queue: false });
                }
                else if (objectBottom - 40 < st && ($(this).css("opacity") == 1)) {
                    $(this).animate({ marginTop: "-40px" }, { duration: 800, queue: false })
                    $(this).animate({ marginBottom: "40px" }, { duration: 800, queue: false });
                    $(this).animate({ opacity: 0 }, { duration: 800, queue: false });
                }
            }
            else if (st < lastScrollTop) {
                if (objectBottom - st >= 40 && objectBottom < windowBottom && ($(this).css("opacity") == 0)) {
                    $(this).animate({ marginTop: "0px" }, { duration: 800, queue: false });
                    $(this).animate({ marginBottom: "0px" }, { duration: 800, queue: false })
                    $(this).animate({ opacity: 1 }, { duration: 800, queue: false });
                }
                else if (objectTop + 30 >= windowBottom && ($(this).css("opacity") == 1)) {
                    $(this).animate({ marginTop: "-40px" }, { duration: 800, queue: false });
                    $(this).animate({ marginBottom: "40px" }, { duration: 800, queue: false })
                    $(this).animate({ opacity: 0 }, { duration: 800, queue: false });
                }
            }
            else{
                if (objectBottom - st >= 40 && objectBottom < windowBottom && ($(this).css("opacity") == 0)) {
                    $(this).animate({ marginTop: "0px" }, { duration: 800, queue: false });
                    $(this).animate({ marginBottom: "0px" }, { duration: 800, queue: false })
                    $(this).animate({ opacity: 1 }, { duration: 800, queue: false });
                }
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
    setInterval(refresh, 100);
});