
/**
 * HP : Index action
 * @param req
 * @param res
 */
exports.indexAction = function (req, res) {

    res.render('index', { title: 'Bienvenue sur PriceMinister', cats: process.PM.categories});

};
