const Barn = require('../models/barn')
const Horse = require('../models/horse')

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
    const barn = await Barn.findById(req.params.id).populate('horses');
    // const horses = await Horse.find({});
    res.render('barns/show', {
        barn,
        title: barn.name
    })
}