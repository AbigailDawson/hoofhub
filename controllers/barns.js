const Barn = require('../models/barn');
const Chore = require('../models/chore');
const Contact = require('../models/contact');

module.exports = {
    index,
    show,
    new: newBarn,
    create,
    edit,
    update
};

async function index(req, res) {
    const barns = await Barn.find({});
    res.render('barns/index', {
        title: 'All Barns',
        barns
    })
}

async function show(req, res) {
    const barn = await Barn.findById(req.params.id)
        .populate({path: 'chores', model: Chore})
        .populate({path: 'contacts', model: Contact})
        .populate('horses');
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

async function edit(req, res) {
    const barn = await Barn.findById(req.params.id)
        .populate({path: 'chores', model: Chore})
        .populate({path: 'contacts', model: Contact})
        .populate('horses');
    const contacts = await Contact.find({ _id: { $nin: barn.contacts } }).sort('name');
    res.render('barns/edit', {
        barn,
        contacts,
        title: `Edit ${barn.name}`
    })
}

async function update(req, res) {
    const barn = await Barn.findOneAndUpdate( { _id: req.params.id }, req.body);
    barn.address.splice(0, 1, req.body);
    await barn.save();
    res.redirect(`/barns/${barn.id}`)
}