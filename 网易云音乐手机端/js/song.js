// $(function(){
//     $.get('./lyric.json').then(function(object){
//         let {lyric} =object
//         let array = lyric.split('\n')
//         let regex = /^\[(.+)\](.+)/
//         array = array.map(function(oldElement){          
//             let matches = oldElement.match(regex)
//             if(matches){  
//                 return{time:matches[1],words:matches[2]}
//             }

//         })
//         let $lyric = $('.lyric')
//         array.map(function(object){
//             if(!object){return}
//             let $p = $('<p/>')
//             $p.attr('data-time',object.time).text(object.words)
//             $p.appendTo($lyric)
//         })
//     })
// })

$(function () {
    let music_id = location.search.match(/id=(\d+)/)[1]
    $.get('./songs.json').then(function (music_array) {
        let song = music_array.filter(function (music_object) {
            return (music_object.id === music_id)
        })[0]

        picture(song)
        album_paly(song)
        music_lyric(song)
    })

    // picture
    function picture(song) {
        let $disc_cover = $(`<img src="${song.disc_cover}" class="disc_cover">`)
        $('.disc_container .disc').prepend($disc_cover)
        $('.page_song').css(`background-image`, `url(${song.disc_background})`)
    }

    // album
    function album_paly(song) {
        let $audio = $('<audio/>')
        $audio[0].src = `${song.url}`
        $audio[0].oncanplay = function () {
            $audio[0].play()
            $('.disc_container').addClass('playing')
        }
        $('.disc_pause').on('click', function () {
            $('.disc_container').removeClass('playing')
            $audio[0].pause()
        })
        $('.disc_play').on('click', function () {
            $('.disc_container').addClass('playing')
            $audio[0].play()
        })

        setInterval(function () {
           
            let times = $audio[0].currentTime
            let minutes_part = ~~(times / 60)
            let seconds_part = times - minutes_part * 60
            let time = `${pad(minutes_part)}:${pad(seconds_part)}`          
            let $p = $('.song_description .lines p') 
            let $which_line
            for(var i=1;i<$p.length;i++){
                if($p.eq(i+1).length !==0 && time>$p.eq(i).attr('data-time') && time<=$p.eq(i+1).attr('data-time')){
                    $which_line = $p.eq(i)
                    break
                }
            }
            if($which_line){
                $which_line.addClass('active').prev().removeClass('active')
                let top = $which_line.offset().top		
				let linesTop = $('.lines').offset().top
				let delta = top - linesTop - $('.lyric').height()/4
				$('.lines').css('transform', `translateY(-${delta}px)`)
            }           
        }, 300)

        function pad(number) {
            if (number < 10) {
                return '0' + number
            } if (number >= 10) {
                return number
            }
        }
    }

    //lyric
    function music_lyric(song) {
        let lyric = song.lyric
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.+)/
        array = array.map(function (string) {
            let matches = regex.exec(string)
            return { time: matches[1], words: matches[2] }
        })
        let $h1 = $('<h1/>')
        $h1.text(song.name)
        $('.song_description').prepend($h1)
        array.map(function (object) {
            let $lyric = $('.lyric')
            let $p = $('<p/>')
            $p.attr('data-time', object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    }

    // $.get('./lyric.json').then(function (object) {
    //     let lyric = object.lyric
    //     let array = lyric.split('\n')
    //     let regex = /^\[(.+)\](.+)/
    //     array = array.map(function (string) {
    //         let matches = regex.exec(string)
    //         return { time: matches[1], words: matches[2] }
    //     })
    //     console.log(array)
    //     array.map(function (object) {
    //         let $lyric = $('.lyric')
    //         let $p = $('<p/>')
    //         $p.attr('data-time', object.time).text(object.words)
    //         $p.appendTo($lyric.children('.lines'))
    //     })
    // })

})