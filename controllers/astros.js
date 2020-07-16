const Astro = require('../models/astro');

module.exports = {
    create,
    index,
    delete: deleteAstro,
    show,
    update
}

function create(req, res) {
    req.body.user = req.user._id
    Astro.create(req.body)
    .then(astro =>{res.json(astro)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    Astro.find({})
    .then(astro =>{res.json(astro)})
    .catch(err => {res.json(err)})
}

function deleteAstro (req, res) {
    Astro.findByIdAndDelete(req.params.id)
    .then(astro =>{res.json(astro)})
    .catch(err => {res.json(err)})
}

function show(req, res) {
    Astro.findById(req.params.id)
    .then(astro =>{res.json(astro)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    Astro.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(astro =>{res.json(astro)})
    .catch(err => {res.json(err)})
}