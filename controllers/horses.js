const Horse = require('../models/horse');
const Contact = require('../models/contact');
const Barn = require('../models/barn');

module.exports = {
    index,
    show,
    new: newHorse,
    create,
    addHorseToBarn
};

async function index(req, res) {
    const horses = await Horse.find({}).sort({ 'name': 1 });
    res.render('horses/index', {
        title: 'All Horses',
        horses
    })
}

async function show(req, res) {
    const horse = await Horse.findById(req.params.id)
    .populate({path: 'contacts', model: Contact})
    .populate('barns');
    res.render('horses/show', {
        horse,
        title: horse.name
    })
}

function newHorse(req, res) {
    res.render('horses/new', {
        title: 'Add Horse', 
        errorMsg: '' 
    });
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const horse = await Horse.create(req.body);
        horse.feed.push(req.body);
        await horse.save();
        res.redirect(`/horses/${horse._id}`);
    } catch (err) {
        console.log(err);
        res.render('horses/new', { errorMsg: err.message });
    }
}

async function addHorseToBarn(req, res) {
    const barn = await Barn.findById(req.params.id);
    barn.horses.push(req.body.horseId);
    await barn.save();
    res.redirect(`/barns/${barn._id}/edit`);
}

