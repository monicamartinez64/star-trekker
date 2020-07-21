const Observation = require('../models/observation');

module.exports = {
    create
}

function create(req, res) {
    req.body.user = req.user._id
    Observation.create(req.body)
    .then(observation =>{res.json(observation)})
    .catch(err => {res.json(err)})
}