var request = require('request'),
    cache = require('../cache'),
    headersDatas = [{name: 'Accept',value: 'application/json'},{name: 'User-Agent',value: 'HACKATHON Q1.2016'}];

cache.init();

/**
 * ProductPage action
 * @param req
 * @param res
 */
exports.ProductPage = function (req, res) {

    var productId = req.params.id;

		if (typeof(productId) === 'undefined') {
			res.status(500).send("<html><html><head><title>500</title></head><body>What ?????? <p>500 ! Go to <a href='/'>Home</a></p></body></html>");
			return;
		}

    var url = 'http://ws.priceminister.com/rest/product/v1/get?advertType=ALL&channel=hackathon&loadProductDetails=true&productId=' + productId;
    console.log(url);
		// TODO : add hash user session
		var timeKey = '>> WS product for "' + productId + '"';
    console.time(timeKey);

    var prdRequest = function() {

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

            cache.newCacheValue('products', productId, JSON.stringify(requestRes));

            res.render('productPage', { title: requestRes.result.headline , product: requestRes.result});
          }
        });
    };

    cache.checkCache('products', productId, function(file) {


      if(file !== null) {

        cache.getCacheValue('products', productId, function(datas) {

          if(datas === null) {
            prdRequest();
          }
          else {

            var requestRes = JSON.parse(datas);
            res.render('productPage', { title: requestRes.result.headline , product: requestRes.result});
          }
        })
      }
      else {
        prdRequest()
      }
    });
};
