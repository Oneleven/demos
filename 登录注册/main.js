//左右位移
$(function () {
  $('.prompt_right button').on('click', function () {
    $('.Form').removeClass('action_left').addClass('action_right')
    $('.signUp').addClass('hidden')
    $('.logIn').removeClass('hidden')
  })

  $('.prompt_left button').on('click', function () {
    $('.Form').removeClass('action_right').addClass('action_left')
    $('.signUp').removeClass('hidden')
    $('.logIn').addClass('hidden')
  })
})
//icon变化

$('.Form input').bind('input propertychange', function (e) {
  let $target = $(e.target)

  let $value = $target.val()
  let $length = $value.length
  if ($length > 0) {
    $target.siblings('.img_1').removeClass('hidden')
    $target.siblings('.img_2').addClass('hidden')
  } else if ($length === 0) {
    $target.siblings('.img_1').addClass('hidden')
    $target.siblings('.img_2').removeClass('hidden')
  }
});