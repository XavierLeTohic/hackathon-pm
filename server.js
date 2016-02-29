var express = require('express'),
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

app.listen(1337, function() {
    console.log('Listening on port 1337...');
});