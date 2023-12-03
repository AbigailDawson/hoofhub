const Barn = require('../models/barn');
const Chore = require('../models/chore');
// const Contact = require('../models/contact');

module.exports = {
    index,
    show,
    new: newBarn,
    create
};

async function index(req, res) {
    const barns = await Barn.find({});
    console.log(barns);
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

async function newBarn(req, res) {
    res.render('barns/new', {
        title: 'Add Barn', 
        errorMsg: '' 
    });
}

async function create(req, res) {
    console.log('REQ.BODY: ', req.body);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const barn = await Barn.create(req.body);
        barn.address.push(req.body);
        await barn.save();
        res.redirect(`/barns/${barn._id}`);
    } catch (err) {
        console.log(err);
        res.render('barns/new', { errorMsg: err.message });
    }
}