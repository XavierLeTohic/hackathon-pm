
/**
 * ProductPage action
 * @param req
 * @param res
 */
exports.ProductPage = function (req, res) {

    res.render('productPage', { title: 'ProductPage' , name: 'you !'});
};