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

$(function(){
  let a =$('a').not('.footer_wrapper >.footer>.footer_left .icons a')
  a.on('click',function(event){
    event.preventDefault();
    var href = $.attr(this, 'href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
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
  function imgPlaceHolder(selector){
    for(let i=0;i<selector.length;i++){
      let $url = selector.eq(i).attr('data-src')
      selector.eq(i).attr('src', $url)
   }  
  }

  $(document).ready(function () {
    let $img_1 = $('.banner >.swiper-container .swiper-slide img')
    let $img_2 = $('.album >.album_slide >.swiper-container .img_wrapper >img')
    imgPlaceHolder($img_1)
    imgPlaceHolder($img_2)
  })

})

//一鍵回到頂部
 $(function(){
        $(window).scroll(function(){
          let $img =  $(".goTop img")
            if($(window).scrollTop() > 200){
              $img.fadeIn(1000);//一秒渐入动画
            }else{
              $img.fadeOut(500);//一秒渐隐动画
            }
        });
       
    });