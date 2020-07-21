const router = require('express').Router();
const apiCtrl = require('../controllers/api');
const api = require('../controllers/api');

router.use(require('../config/auth'));
router.post('/weather', checkAuth, apiCtrl.getWeather);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;