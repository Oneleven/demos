// 垂直轮播
$('#demo15').swiper({
  pagination: '#demo15 .swiper-pagination',
  direction: 'vertical',
  slidesPerView: 1,
  paginationClickable: true,
  spaceBetween: 30,
  mousewheelControl: true,
  loop: true
});

//水平轮播
$('#demo5').swiper({
  pagination: '#demo5 .swiper-pagination',
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 30,
  autoplay: 3500,
  loop: true
});

// 页面锚点平滑跳转
$(function () {
  $('.banner > .swiper-container .swiper-slide a').on('click', function () {
    $("html,body").animate({ scrollTop: $("#LearnMore").offset().top }, 500);
  })

  $('.topbar .navigation>a').eq(0).on('click', function () {
    $("html,body").animate({ scrollTop: $("#Home").offset().top }, 500);
  })

  $('.topbar .navigation>a').eq(1).on('click', function () {
    $("html,body").animate({ scrollTop: $("#LearnMore").offset().top }, 500);
  })

  $('.topbar .navigation>a').eq(2).on('click', function () {
    $("html,body").animate({ scrollTop: $("#Introduction_1").offset().top }, 500);
  })

  $('.topbar .navigation>a').eq(3).on('click', function () {
    $("html,body").animate({ scrollTop: $("#Introduction_2").offset().top }, 500);
  })

  $('.topbar .navigation>a').eq(4).on('click', function () {
    $("html,body").animate({ scrollTop: $("#Album").offset().top }, 500);
  })

  $('.topbar .navigation>a').eq(5).on('click', function () {
    $("html,body").animate({ scrollTop: $("#Contact").offset().top }, 500);
  })

  $('.footer_wrapper >.footer>.footer_middle a').on('click', function () {
    $("html,body").animate({ scrollTop: $("#Home").offset().top }, 500);
  })

})

//tab点击
$(function () {
  let $selector = $('.introduction_1 >.block')
  $selector.on('click', function (e) {
    let $block = $(e.currentTarget)
    $block.addClass('active').siblings().removeClass('active')
  })

  let $selector_1 = $('.introduction_2>.block_bottom .block_right1')
  $selector_1.on('click', function (e) {
    let $block = $(e.currentTarget)
    $block.addClass('active_1').siblings().removeClass('active_1')
  })
})

// 图片占位符

$(function () {

  $(document).ready(function () {
    let $img_1 = $('.banner >.swiper-container .swiper-slide img')
    for(var i=1;i<$img_1.length;i++){
       let $url = $img_1.eq(i).attr('data-src')
        $img_1.eq(i).attr('src', $url)
    }  
  })


  $(document).ready(function () {
    let $img_1 = $('.album >.album_slide >.swiper-container .img_wrapper >img')
    for(var i=1;i<$img_1.length;i++){
       let $url = $img_1.eq(i).attr('data-src')
        $img_1.eq(i).attr('src', $url)
    }  
  })

})
