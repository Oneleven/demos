// $(function(){
//     setTimeout(function(){
//         $.get('./songs.json').then(function(music_array){
//         music_array.forEach(function(music_object) {
//             let $li = $(`
//              <li>
//                 <a href="./song.html?id=${music_object.id}">
//                     <h3>${music_object.name} <span>${music_object.addition}</span></h3>
//                     <div class="singer">
//                         <img src="./img/SQ.png" alt="">
//                         <p>${music_object.singer}</p>
//                     </div>
//                     <img src="./img/play_music.png" class="play_music" alt=""></a>
//             </li>
//             `)
//             $('#lastest_music').append($li)
//         })
//         $('.loading').remove()
//     })
//     },1000)

// })

$(function () {
    setTimeout(function () {
        $.get('./songs.json').then(function (music_array) {
            music_array.forEach(function (music_object) {
                let $li = $(`
             <li>
                <a href="./song.html?id=${music_object.id}">
                    <h3>${music_object.name} <span>${music_object.addition}</span></h3>
                    <div class="singer">
                       
                        <p>${music_object.singer}</p>
                    </div>
                    <img src="./img/play_music.png" class="play_music" alt=""></a>
            </li>
            `)

                $('.lastest_musiclist').append($li)
                // 判断是否添加sq标志           
            })
            let $li_all = $('.lastest_music li')
            music_array.forEach(function (music_object, index) {
                if (music_object.sq === 'yes') {
                    let $img = $('<img src="./img/SQ.png" alt="">')
                    $($li_all[index]).find('.singer').prepend($img)
                }
            })
            console.log($li_all)
            $('.lastest_music .loading').remove()
        })
    }, 700)

    $('.nav_list').on('click', '.nav_items >li', function (e) {
        let $li = $(e.currentTarget)
        $li.addClass('active').siblings().removeClass('active')
        let index = $li.index()
        $('.tab_list >li').eq(index).addClass('active').siblings().removeClass('active')

        if (index === 1) {
            if ($('.page2').attr("downloaded") !== "yes") {
                $.get('./page2.json').then(function (music_array) {
                    $('.page2').attr("downloaded", "yes")
                    music_array.forEach(function (music_object) {
                        let $li = $(`
             <li>
                <a href="./song.html?id=${music_object.id}">
                    <div class="music_number"></div>
                        <div>
                            <h3>${music_object.name} <span>${music_object.addition}</span></h3>
                            <div class="singer">                    
                                <p>${music_object.singer}</p>
                            </div>
                        </div>
                    <img src="./img/play_music.png" class="play_music" alt=""></a>
            </li>
            `)
                        $('.hot_musiclist').append($li)
                    })
                    // 判断是否添加sq标志     
                    let $li_all = $('.hot_musiclist li')
                    music_array.forEach(function (music_object, index) {
                  
                        $($li_all[index]).find('.music_number').text(pad(index+1))
                        if(index<=2){
                            $($li_all[index]).find('.music_number').css("color","#D33A31")               
                        }else{
                            $($li_all[index]).find('.music_number').css("color","#888888")
                        }
                        if (music_object.sq === 'yes') {
                            let $img = $('<img src="./img/SQ.png" alt="">')
                            $($li_all[index]).find('.singer').prepend($img)
                        }
                    })
                    function pad(number) {
                        if (number < 10) {
                            return '0' + number
                        } if (number >= 10) {
                            return number
                        }
                    }
                    $('.page2 .loading').remove()
                })
            }

        } else if (index === 2) {
            $.get('./page3.json').then(function (promise) {
                console.log(promise.content)
            })
        }
    })

})