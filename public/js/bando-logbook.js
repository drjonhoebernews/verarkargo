$(function(){
	
	var $window = $(window);

	if ($window.width() > 1023) {
		$window.scroll(function() {
			if ($(document).scrollTop() >= 120) { 
				$('html').addClass('scroll');
			} else {
				$('html').removeClass('scroll');
			}	
		});
	}
	
	$(".nav-icon").click(function () {		
		$(this).toggleClass('nav-icon-close');
		$("#nav").stop(true , true).slideToggle();		
		
		$(".search-icon, .top-lang-icon").removeClass("search-icon-close");
		$(".top-search, .top-lang").stop(true,true).slideUp();
		
		return false;
	});
	
	$(".header-lang-icon").click(function () {
		$(".header-lang").stop(true , true).slideToggle();
		return false;
	});
	
});

$(document).ready(function() {
	
	$('.fancybox').fancybox();
	
	$('.cookies-close').click(function(e){
		$('body').find('.cookies').remove();	
	});
	
});

$(document).ready(function(){
	
	jQuery('.slider-hero').bind('touchstart', function(){ console.log('touchstart') });
	$('.slider-hero').slick({
		dots:true,
		infinite:false,
		speed:750,
		responsive: [
		{
			breakpoint:1024,
			settings: "unslick"
		}
		]
	});
	
});