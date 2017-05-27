function animate() {
	$(".barline").each(function (i, item) {
		var a = parseInt($(item).attr("data-width"));
		$(item).animate({
			width: a + "%"
		}, 1000);
	});
}
animate();

$('.heros .hero > img').on('mouseenter',function(e){
	var $click = $(e.target)
	var $a = $click.siblings('.wrapper').find('.barline')
	$a.css("width","0")
	function animate() {
	$a.each(function (i, item) {
		let a = parseInt($(item).attr("data-width"));
		$(item).animate({
			width: a + "%"
		}, 1000);
	});
}
animate();
})


jQuery(function ($) {
	$('#demo21').swiper({
		pagination: '#demo21 .swiper-pagination',
		paginationClickable: true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false
	});
})
