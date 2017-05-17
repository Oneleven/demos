var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function (request, response) {

    var temp = url.parse(request.url, true)
    var path = temp.pathname
    var query = temp.query
    var method = request.method


    if (path === './page/page1.json') {  // 如果用户请求的是 / 路径
        var string = fs.readFileSync('./page/page1.json')
        response.setHeader('Content-Type', 'application/json')
        response.end(string)
    }


    if (path === './page/page2.json') {  // 如果用户请求的是 / 路径
        var string = fs.readFileSync('./page/page2.json')
        response.setHeader('Content-Type', 'application/json')
        response.end(string)
    }


}) 