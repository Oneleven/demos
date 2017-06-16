require.config({
        paths: {
            'jquery': './node_modules/dist/jquery'
        }
    }
)

require(['jquery'], function ($) {
    $('h1').textContent = 'Hello World'
})