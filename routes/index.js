var indexCtrl = require('../controllers/indexCtrl'),
    productCtrl = require('../controllers/productCtrl'),
    searchCtrl = require('../controllers/searchCtrl');

/**
 * Index Router
 * @param app
 */
module.exports = function(app) {

    app.get('/', indexCtrl.indexAction);
    app.get('/product/:id', productCtrl.ProductPage);

    app.get('/search', searchCtrl.SearchAction);

    //The 404 Route (ALWAYS Keep this as the last route)
		app.get('*', function(req, res){
		  res.status(404).send("<html><html><head><title>404</title></head><body>What ?????? <p>404: Resource not found. Go to <a href='/'>Home</a></p></body></html>");
		});
};