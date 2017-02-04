/*Get json data of quotes, connect with socket.io, on-button click, read the next one */
var http = require('http');

var options = {
	host:'www.quotesondesign.com',
	path:'/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
};

http.request(options, function(response){
	var str = '';
	response.on('data', function(chunk){
		str += chunk;
	});
	response.on('end',function(){
		console.log(str);
	});
})