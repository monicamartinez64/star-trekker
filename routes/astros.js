const router = require('express').Router();
const astrosCtrl = require('../controllers/astros');

/*---------- Public Routes ----------*/
router.get('/', astrosCtrl.index);
router.get('/:id', astrosCtrl.show);

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.post('/', checkAuth, astrosCtrl.create);
router.delete('/:id', checkAuth, astrosCtrl.delete);
router.put('/:id', checkAuth, astrosCtrl.update);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;