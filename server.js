var express = require('express'),
    jsxEngine = require('express-react-views'),
    chalk = require('chalk'),

    routes = require('./routes'),
    app = module.exports.app = exports.app = express(),

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
});
