const Barn = require('../models/barn');
const Chore = require('../models/chore');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const barns = await Barn.find({});
    res.render('barns/index', {
        title: 'All Barns',
        barns
    })
}

async function show(req, res) {
    const barn = await Barn.findById(req.params.id).populate({path: 'chores', model: Chore}).populate('horses');
    res.render('barns/show', {
        barn,
        title: barn.name
    })
}