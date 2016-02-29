var indexCtrl = require('../controllers/indexCtrl');

/**
 * Index Router
 * @param app
 */
module.exports = function(app) {

    app.get('/', indexCtrl.indexAction);
};