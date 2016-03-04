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

};
