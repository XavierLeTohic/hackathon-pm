
/**
 * HP : Index action
 * @param req
 * @param res
 */
exports.indexAction = function (req, res) {

    var waitCat = function() {

      setTimeout(function() {

        if(typeof process.PM.categories === 'undefined') {

          waitCat();
        }
        else {
          res.render('index', { title: 'Bienvenue sur PriceMinister', cats: process.PM.categories});
        }

      }, 500);
    };

    if(typeof process.PM.categories === 'undefined') {

      waitCat();
    }
    else {
      res.render('index', { title: 'Bienvenue sur PriceMinister', cats: process.PM.categories});
    }

};
