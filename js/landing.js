$(document).ready(function(){  
    $(".carousel .bxslider").size() ? $(".bxslider").bxSlider() : $.noop();

    document.body.className += " loaded";



    var resizeTimer;
    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            onResize();                  
        }, 30);
    });
	
    function onResize() {
        if (!$('.screen3').is(":visible")) {
            return;
        }
        
        var width = 1440;
        var height = 498;

        var coeff = $(document).width() / width;
        $('.graph').css({'height' : 498 * coeff + 'px'});
        $('.graph .pointer1, .data.data1').css({'bottom' : 40 * coeff + 'px', 'left' : 182 * coeff + 'px'});
        $('.graph .pointer2, .data.data2').css({'bottom' : 105 * coeff + 'px', 'left' : 532 * coeff + 'px'});
        $('.graph .pointer3, .data.data3').css({'bottom' : 258 * coeff + 'px', 'left' : 878 * coeff + 'px'});
        $('.graph .pointer4').css({'bottom' : 430 * coeff + 'px', 'right' : 187 * coeff + 'px'});
        $('.data.data4').css({'bottom' : 390 * coeff + 'px', 'right' : 187 * coeff + 'px'});

        $('.screen3 .graph .pointer').css({'width' : 56 * coeff + 'px', 'height' : 56 * coeff + 'px'});

    }
    onResize();



        $('.fancybox')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});

    var bxslider = $(".bxslider").size() ? $(".bxslider").bxSlider({
        minSlides: 1,
        maxSlides: 7,
        slideWidth: 270,
        pager: false,
        slideMargin: 16
    }) : $.noop();

    var slider = $(".slider").size() ? $(".slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        mode: 'fade',
        autoControls: false,
        auto: false,
        speed: 500,
        infiniteLoop: false,
        onSlideAfter: function(index) {
            if ($(index).find('.bxslider').size()) {
                bxslider.reloadSlider();
            }
        },
        slideMargin: 0
    }) : $.noop();
    
    $('.slider').mousewheel(function(event, delta, deltaX, deltaY) {
        if (delta > 0) {
            slider.goToPrevSlide();
        }

        if (deltaY < 0){
            slider.goToNextSlide();
        }

        event.stopPropagation();
        event.preventDefault();
    });

    var sec;
    for (var i = 1; i <= 25; i++) {
        sec = Math.floor((Math.random() * 25) + 1);
        $('.pehia .ico' + i).css({
            '-webkit-animation': 'fadein ' + sec + 's',
            '-moz-animation': 'fadein ' + sec + 's',
            '-ms-animation': 'fadein ' + sec + 's',
            '-o-animation': 'fadein ' + sec + 's',
            'animation': 'fadein ' + sec + 's'
        })
    }
});
