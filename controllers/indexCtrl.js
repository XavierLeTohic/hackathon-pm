/**
 * Page controller
 */

/**
 * Index action
 * @param req
 * @param res
 */
exports.indexAction = function (req, res) {

    res.render('index', { title: 'Index' , name: 'you !'});
};
