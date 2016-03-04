var request = require('request'),
    cache = require('../cache'),
    headersDatas = [{name: 'Accept',value: 'application/json'},{name: 'User-Agent',value: 'HACKATHON Q1.2016'}];
/**
 * Search action
 * @param req
 * @param res
 */
exports.SearchAction = function (req, res) {
    'use strict';

		var query = '',
		    result = req.query;

    for (var prop in result) {

		    if (result.hasOwnProperty(prop)) {

		        if(prop === 'kw'
              || prop === 'category'
              || prop === 'pageNumber'
              || prop.indexOf('f') === 0) {

                if(typeof result[prop] !== 'undefined' && result[prop] !== '') {

                  query += '&' + prop + "=" +result[prop];
                }
		        }
		    }
		}

		if (query === '') {
			res.status(500).send("<html><html><head><title>500</title></head><body>What ?????? <p>500 ! Go to <a href='/'>Home</a></p></body></html>");
			return;
		}

    var searchRequest =function() {

      var url = 'http://ws.priceminister.com/rest/navigation/v1/list?';
      url += (typeof result.pageNumber === 'undefined' ? 'pageNumber=1&' : '');
      url += 'advertType=ALL&channel=hackathon&loadProducts=true&withoutStock=false';
      url += query;

      console.log(url);

      // TODO : add hash user session
      var timeKey = '>> WS search for "' + query + '"';
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
            res.render('404');
          }
          else {
            var requestRes = JSON.parse(body);

            cache.newCacheValue('search', encodeURIComponent(result.pageNumber + query), JSON.stringify(requestRes));

            res.render('SearchPage', { title: 'Navigation PriceMinister', currentUrl: req.url , products: requestRes.result.products, kw: req.query.kw, cats: requestRes.result.categories, filters: requestRes.result.filters});
          }
        });
    };

  console.log(result.pageNumber + query);

    cache.checkCache('search', encodeURIComponent(result.pageNumber + query), function(file) {

      if(file === null) {

        searchRequest();
      }
      else {

        cache.getCacheValue('search', encodeURIComponent(result.pageNumber + query), function(datas) {

          if(datas === null) {

            searchRequest();
          }
          else {

            var requestRes = JSON.parse(datas);
            res.render('SearchPage', { title: 'Nagigation PriceMinister', currentUrl: req.url , products: requestRes.result.products, kw: req.query.kw, cats: requestRes.result.categories, filters: requestRes.result.filters});
          }
        });
      }
    });
};
