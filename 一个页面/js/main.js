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

  $('.topbar .navigation>a:nth-child(1)').on('click', function () {
    $("html,body").animate({ scrollTop: $("#home").offset().top }, 500);
  })

  $('.topbar .navigation>a:nth-child(6)').on('click', function () {
    $("html,body").animate({ scrollTop: $("#contact").offset().top }, 500);
  })

  $('.topbar .navigation>a:nth-child(5)').on('click', function () {
    $("html,body").animate({ scrollTop: $("#album").offset().top }, 500);
  })


  $('.topbar .navigation>a').slice(1, 4).on('click', function () {
    $("html,body").animate({ scrollTop: $("#LearnMore").offset().top }, 500);
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

// 3D hover