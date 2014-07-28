var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
	var body = '';
	req.on('data', function(data){
		body += data;
	});
	req.on('end', function(){
		JSON.parse(body)
	});
  res.writeHead(200, archive.headers);
  res.end(JSON.stringify(body));
};
