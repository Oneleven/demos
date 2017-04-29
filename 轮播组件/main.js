window.slides = function (element) {
    var $el = $(element)
    var $view = $('.view')
    var width = $el.width()
    var count = $el.find('.slide').length
    var currentSlide = 0
    var timeId

//插入ol和li，li个数跟随div个数变化而变化

    var $ol = $('<ol class="control"></ol>')
    for (let i = 0; i < count; i++) {
        $ol.append(`<li>${i + 1}</li>`)
    }
    $el.append($ol)

//居中：计算ol距离left百分比 

    var widthLi = $ol.width()
    var half = (width - widthLi) / 2
    var percentage = (half / width) * 100
    console.log(percentage)
    $ol.css({left: `${percentage}%`})


//监听ol，点击li触发轮播事件
    $ol.on('click', 'li', function (e) {
        let $li = $(e.target)
        let number = $li.index()

        goToSlide(number)

    })

//鼠标放上去暂停&离开继续
    $view.on('mouseenter', function () {
        clearInterval(timeId)
    })
    $view.on('mouseleave', function () {
        autoPlay()
    })

//构造函数goToSlide

    function goToSlide(n) {
        if (n < 0) {
            n = count - 1
        } else if (n >= count) {
            n = 0
        }

// 当n=0时的情况  

        if (n === 0) {
            let $fakeSlide = $el.find('.slide').eq(0).clone()
            $fakeSlide.appendTo($view)
            let distance = -width * count
            $view.css({
                transform: `translateX(${distance}px)`
            })


            $view.one('transitionend', function () {
                $fakeSlide.remove()
                let oldTransition = $view.css('transition')
                $view.css({
                    transition: 'none',
                    transform: `translateX(0px)`
                })
                $view.offset()
                $view.css('transition', oldTransition)
                currentSlide = n
            })

            return
        }

        let distance = -width * n
        $view.css({
            transform: `translateX(${distance}px)`
        })
        currentSlide = n
    }

    function autoPlay() {
        timeId = setInterval(function () {
            goToSlide(currentSlide + 1)
        }, 2000)
    }

    autoPlay()

}


slides(document.querySelector('.slides'))
