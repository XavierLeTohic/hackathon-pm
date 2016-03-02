var request = require('request');
    headersDatas = [{name: 'content-type',value: 'application/json'},{name: 'User-Agent',value: 'HACKATHON Q1.2016'}];
/**
 * Search action
 * @param req
 * @param res
 */
exports.SearchAction = function (req, res) {

		var searchKwd = req.query.key;
    var url = 'http://ws.priceminister.com/rest/navigation/v1/list?kw='+ searchKwd + '&pageNumber=1&advertType=ALL&channel=hackathon&loadProducts=true&withoutStock=true';
		
		// TODO : add hash user session
		var timeKey = '>> WS search for "' + searchKwd + '"';
    console.time(timeKey);
	  
		request({
		  // will be ignored
		  method: 'GET',
		  uri: url,

		  // HTTP Archive Request Object
		  har: {
		    url: url,
		    method: 'GET',
		    headers: headersDatas
		  }
		}, 
		function(error, response, body) {
      console.timeEnd(timeKey);
		    
      if(error) {
		    console.error(error);
        response.writeHead(404, "Resource Not Found Arrrrrrggggg !", { "Content-Type": "text/html" });
      	response.write("<html><html><head><title>404</title></head><body>404: Resource not found. Go to <a href='/'>Home</a></body></html>");
        response.end();
		  }
		  else {
		    var requestRes = JSON.parse(body);
        res.render('SearchPage', { title: 'Index' , products: requestRes.result.products});
		  }
		});
};
