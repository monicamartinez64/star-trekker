
const router = require('express').Router();
const observationsCtrl = require('../controllers/observations');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.post('/', checkAuth, observationsCtrl.create);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;