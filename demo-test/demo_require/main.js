require.config({
        paths: {
            'jquery': 'lib/jquery'
        }
    })

require(['jquery'], function ($) {
    $(function(){
         $('h1').text ('Hello World')
    })
   
})