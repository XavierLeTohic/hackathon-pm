'use strict';

var express = require('express'),
    jsxEngine = require('express-react-views'),
    chalk = require('chalk'),
    compression = require('compression'),
    http = require('http'),
    cache = require('./cache'),

    routes = require('./routes'),
    app = module.exports.app = exports.app = express(),

    request = require('request'),
    headersDatas = [{name: 'Accept',value: 'application/json'},{name: 'User-Agent',value: 'HACKATHON Q1.2016'}],

    SERVER_PORT = process.env.PORT || 8000;

http.globalAgent.maxSockets = 50;

app.use(compression());

cache.newCacheGroup('products').newCacheGroup('search').newCacheGroup('categories');

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine.createEngine());

if(process.env.NODE_ENV === 'development') {
  app.use(require('connect-livereload')());
}

app.use(express.static('./public/build'));
app.use(express.static('./public/libs'));

routes(app);

app.use(function(req, res, next) {
  res.status = 404;
  res.render('404');
});

app.listen(SERVER_PORT, function() {
  'use strict';

  console.log(chalk.green(
    'Server is running on port ' + chalk.bold(SERVER_PORT)
  ));

  if(typeof process.PM === 'undefined') {
    process.PM = {};
  }


  if(typeof process.PM.categories === 'undefined') {
    /**  INIT DE LA NAV GLOBAL **/
    var url = 'http://ws.priceminister.com/rest/navigation/v1/list?pageNumber=1&advertType=ALL&channel=hackathon&loadProducts=false&withoutStock=false',
        timeKey = '>> WS get global navigation';

    var catRequest = function() {
      'use strict';

      console.log(url);
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
          }
          else {

            var requestRes = JSON.parse(body);

            cache.newCacheValue('categories', encodeURIComponent(url), JSON.stringify(requestRes));

            process.PM.categories =  requestRes.result.categories;
          }
        });
    };

    cache.checkCache('categories', encodeURIComponent(url), function(file) {
      'use strict';

      if(file === null) {

        catRequest();
      }
      else {

        cache.getCacheValue('categories', encodeURIComponent(url), function(datas) {

          var requestRes = JSON.parse(datas);
          process.PM.categories =  requestRes.result.categories;
        });
      }

    });

  }

});
