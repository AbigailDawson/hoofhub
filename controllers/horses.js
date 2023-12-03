const Horse = require('../models/horse');
const Contact = require('../models/contact');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const horses = await Horse.find({});
    res.render('horses/index', {
        title: 'All Horses',
        horses
    })
}

async function show(req, res) {
    const horse = await Horse.findById(req.params.id).populate({path: 'contacts', model: Contact}).populate('barns');
    res.render('horses/show', {
        horse,
        title: horse.name
    })
}