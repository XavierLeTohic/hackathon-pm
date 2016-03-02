/**
 * Index action
 * @param req
 * @param res
 */
exports.indexAction = function (req, res) {

    res.render('index', { title: 'Index' , name: 'you !'});
};

/**
 * ProductPage action
 * @param req
 * @param res
 */
exports.ProductPage = function (req, res) {

    res.render('productPage', { title: 'ProductPage' , name: 'you !'});
};