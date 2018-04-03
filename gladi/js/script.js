$(document).ready(function() {
    $('.sl').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1.68,
        responsive: [
            {
                breakpoint: 660,
                settings: {
                    autoplay: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 968,
                settings: {
                    autoplay: true,
                    arrows: true,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.image').click(function() {
        var img = $(this);
        var src = img.attr('src');
        $('.app').append("<div class = 'popup'>" + "<div class='popup_title'></div>" + "<img src='"+src+"' class='popup_img'/>" + "</div>");
            $('.popup').fadeIn(800);
        $('.popup_title').click(function() {
            $('.popup').fadeOut(800);
            setTimeout(function() {
                $('.popup').remove();
            }, 800);
        });
    });

    $('.hamburger').click(function() {
        $('.menu-none').fadeToggle(1000);
    })
});
