const Barn = require('../models/barn');
const Chore = require('../models/chore');
const Contact = require('../models/contact');
const Horse = require('../models/horse');

module.exports = {
    index,
    show,
    new: newBarn,
    create,
    edit,
    update,
    delete: deleteBarn
};

async function index(req, res) {
    const barns = await Barn.find({})
        .populate({path: 'chores', model: Chore})
        .populate({path: 'contacts', model: Contact})
        .populate({path: 'horses', model: Horse})
    res.render('barns/index', {
        title: 'All Barns',
        barns
    })
}

async function show(req, res) {
    console.log(req.query.sort)
    const barn = await Barn.findById(req.params.id).populate('chores contacts horses').sort({[`horses.${req.query.sort}`]: 1})
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
    const horses = await Horse.find({ _id: { $nin: barn.horses } }).sort('name');
    res.render('barns/edit', {
        barn,
        contacts,
        horses,
        title: `Edit ${barn.name}`
    })
}

async function update(req, res) {
    const barn = await Barn.findOneAndUpdate( { _id: req.params.id }, req.body);
    barn.address.splice(0, 1, req.body);
    await barn.save();
    res.redirect('/barns')
}

async function deleteBarn(req, res) {
    const barn = await Barn.findOneAndDelete({ _id: req.params.id });
    res.redirect('/barns')
}