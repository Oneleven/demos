//leancloud初始化
var APP_ID = 'rXIWpHk4BwkM8pCMUPDa9Klt-gzGzoHsz';
var APP_KEY = 'nLL2HCbhrSrAO7lcCDLue4v7';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log(AV)

//test
// var TestObject = AV.Object.extend('TestObject');  存到哪张表格名字
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

// 注册
let signUpForm = document.querySelector('[name=signUp]')
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let password = signUpForm.password.value
  if(password.length === 0){
     $('#error_signUp_password').text("密码不能为空！").show().fadeOut(2000)
    }else if(password.length <6){
     $('#error_signUp_password').text("密码不能少于6位！").show().fadeOut(2000)
     return 
    }
  // 新建 AVUser 对象实例
  var user = new AV.User();
  // 设置用户名
  user.setUsername(signUpForm.username.value); //form表单里面有个叫username的input,可以用这种方式取用户输入的值
  // 设置密码
  user.setPassword(signUpForm.password.value);
  // 设置邮箱
  user.setEmail(signUpForm.email.value);
  user.signUp().then(function (loginedUser) {
    console.log(password)
    window.location.href = "./logIn.html"
    console.log(loginedUser);
  }, function (error) {
    console.log(error)
    if(error.code === 203){
     $('#error_signUp_email').text("此电子邮箱已被占用！").show().fadeOut(2000) 
    }else if(error.code === 202){
     $('#error_signUp_username').text("此用户名已被注册！").show().fadeOut(2000) 
    }
  })
})

let currentUser = AV.User.current()
if (currentUser) {
  window.location.href = "./logIn.html"
}


// 登录
let logInForm = document.querySelector('[name=logIn]')
logInForm.onsubmit = (e) => {
  e.preventDefault()
  let username = logInForm.username.value
  let password = logInForm.password.value
  AV.User.logIn(username, password).then(function (loginedUser) {
    console.log(loginedUser)
    window.location.href = "./logIn.html"
  }, function (error) {
    console.log(error)
    if (error.code === 210) {
      $('#error_logIn_password').text("密码错误！").show().fadeOut(2000)
    } else if (error.code === 219) {
      $('#error_logIn_password').text("登录失败次数超过限制，请稍候再试!").show().fadeOut(2000)
    } else if (error.code === 211) {
      $('#error_logIn_username').text("用户不存在！").show().fadeOut(2000)
    }
    console.log('ok')
  });

}

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
//icon变化，监听input里面的内容变化，有变化就出发事件

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