var express = require('express'),
		stylus = require('stylus'),
		chouchenn = require('chouchenn'),
    routes = require('./routes'),
    jsxEngine = require('express-react-views'),
    app = module.exports.app = exports.app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine.createEngine());

app.use(require('connect-livereload')());
app.use(express.static('./public/build'));
app.use(express.static('./public/libs'));

routes(app);

function compile(str, path) {
  return stylus(str)
  .set('filename', path)
  .set('compress', true)
  .use(chouchenn());
}

app.use(stylus.middleware({
  src: __dirname
  , compile: compile
}));

app.listen(1337, function() {
    console.log('Listening on port 1337...');
});