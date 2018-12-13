var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('得到 HTTP 路径\n' + path)

if(path === '/'){
  var string = fs.readFileSync('./index.html','utf8')
  response.statusCode = 200
  response.setHeader('Content-Type','text/html; charset=utf-8')
  response.write(string)
  response.end()
}else if(path === '/sign_up'){
  var string = fs.readFileSync('sign_up.html','utf8')
  response.statusCode = 200
  response.setHeader('Content-Type','text/html; charset=utf-8')
  response.write(string)
  response.end()
}else if(path === '/main.js'){
  var string = fs.readFileSync('./main.js','utf8')
  response.statusCode = 200
  response.setHeader('Content-Type','text/javascript; charset=utf-8')
  response.write(string)
  response.end()
}else if(path === '/jQuery-ajax.js'){
  var string = fs.readFileSync('./jQuery-ajax.js','utf8')
  response.statusCode = 200
  response.setHeader('Content-Type','text/javascript; charset=utf-8')
  response.write(string)
  response.end()
}else if(path === '/promise.js'){
  var string = fs.readFileSync('./promise.js','utf8')
  response.statusCode = 200
  response.setHeader('Content-Type','text/javascript; charset=utf-8')
  response.write(string)
  response.end()
}else if(path === '/xxx'){
  response.statusCode = 200
  response.setHeader('Content-Type','text/json; charset=utf-8')
  response.setHeader('Access-Control-Allow-Origin','http://ry.com:8001')
  response.write(`
    {
      "note":{
        "to": "tove",
        "from": "Jani",
        "content": "Reminder",
        "body": "Don't forget me this weekend!"
      }
    }
  `)
  response.end()
}else{
  response.statusCode = 404
  response.setHeader('Content-Type', 'text/html;charset=utf-8')
  response.write(`
    {
      "error": "not found"
    }
  `)
  response.end()
}

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

