var http = require('http');
var url = require('url')

http.createServer( function (req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    var result = url.parse(req.url, true).query;
    var txt = "Hello " + result.name + " to " + result.place;
    res.end(txt);
}).listen(8080);