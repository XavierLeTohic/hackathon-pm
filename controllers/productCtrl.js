
/**
 * ProductPage action
 * @param req
 * @param res
 */
exports.ProductPage = function (req, res) {

    var productId = req.params.id;
    console.log(productId);

    res.render('productPage', { title: 'ProductPage' , name: 'you !'});
};