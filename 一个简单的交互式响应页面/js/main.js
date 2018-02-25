function animate(selector) {
	selector.each(function (i, item) {
		let a = parseInt($(item).attr("data-width"));
		$(item).animate({
			width: a + "%"
		}, 1000);
	});
}
let $barline = $(".barline")
animate($barline);

$('.heros .hero > img').on('mouseenter',function(e){
	let $click = $(e.target)
	let $a = $click.siblings('.wrapper').find('.barline')
	$a.css("width","0")
	$a.css("width","0")
animate($a);
})

// 轮播组件
jQuery(function ($) {
	$('#demo21').swiper({
		pagination: '#demo21 .swiper-pagination',
		paginationClickable: true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 3000,
		autoplayDisableOnInteraction:false
	});
})
