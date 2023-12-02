const Barn = require('../models/barn')

module.exports = {
    index
};

async function index(req, res) {
    const barns = await Barn.find({});
    res.render('barns/index', {
        title: 'All Barns',
        barns
    })
}