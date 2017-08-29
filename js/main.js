$(document).ready(function(){  
	var resizeTimer;
    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            onResize();                  
        }, 100);
    });
	
    function onResize() {
        var width = $('body').width();
        var reduce = width > 995 ? 195 : 156;
        var height = $('body').height() - reduce;

	    $('.scrollbar').css({'height' : height + 'px'});
    }
    onResize();

    $(".carousel .bxslider").size() ? $(".bxslider").bxSlider() : $.noop();

    $(".photos .bxslider").size() ? $(".bxslider").bxSlider({
        minSlides: 1,
        maxSlides: 7,
        slideWidth: 117,
        slideMargin: 4
    }) : $.noop();

    $('.responsive, aside .close').click(function(){
        $('aside').toggleClass('show');
    });
	
	$('.responsive_small, .txt .store_page .services .close').click(function(){
        $('.txt .store_page .services .left').toggleClass('show');
    });

    $('[data-toggle="tooltip"]').tooltip({'placement' : 'bottom'})

    $(document).click(function (event) {
        if ($(event.target).closest('aside').length == 0 && $(event.target).attr('class') != 'responsive' && $('aside').hasClass('show')) {
            $('aside').toggleClass('show');
        }
		
		if ($(event.target).closest('.left').length == 0 && $(event.target).attr('class') != 'responsive_small' && $('.txt .store_page .services .left').hasClass('show')) {
            $('.txt .store_page .services .left').toggleClass('show');
        }
    });
});
