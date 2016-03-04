var express = require('express'),
    jsxEngine = require('express-react-views'),
    chalk = require('chalk'),

    routes = require('./routes'),
    app = module.exports.app = exports.app = express(),

    request = require('request'),
    headersDatas = [{name: 'Accept',value: 'application/json'},{name: 'User-Agent',value: 'HACKATHON Q1.2016'}],

    SERVER_PORT = process.env.PORT || 8000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine.createEngine());

if(process.env.NODE_ENV === 'development') {
  app.use(require('connect-livereload')());
}

app.use(express.static('./public/build'));
app.use(express.static('./public/libs'));

routes(app);

app.listen(SERVER_PORT, function() {
  console.log(chalk.green(
    'Server is running on port ' + chalk.bold(SERVER_PORT)
  ));

console.log(global.PM);

  if(typeof global.PM === 'undefined') {
    global.PM = {};
  }

console.log(global.PM.categories);
  if(typeof global.PM.categories === 'undefined') {
    /**  INIT DE LA NAV GLOBAL **/
    var url = 'http://ws.priceminister.com/rest/navigation/v1/list?pageNumber=1&advertType=ALL&channel=hackathon&loadProducts=false&withoutStock=false',
        timeKey = '>> WS get global navigation';

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
        const requestRes = JSON.parse(body);
        global.PM.categories =  requestRes.result.categories;
      }
    });
  }

});
