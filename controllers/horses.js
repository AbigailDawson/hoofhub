const Horse = require('../models/horse');
const Barn = require('../models/barn');

module.exports = {
    index,
    show,
    new: newHorse,
    create,
    updateHorses,
    addToBarn,
    edit,
    updateHorse
};

async function index(req, res) {
    let horses = await Horse.find({ user: req.user._id });

    let query = {};
    if (req.query.search) {
        query = { name: { $regex: new RegExp(req.query.search, 'i') } };
        horses = await Horse.find(query);
    }

    if (req.query.sort === 'age') {
        horses.sort((a, b) => a[req.query.sort] - b[req.query.sort])
    } else if (req.query.sort === 'name') {
        horses.sort((a, b) => {
            const horseA = a.name.toLowerCase();
            const horseB = b.name.toLowerCase();
            if (horseA < horseB) {
                return -1;
              }
              if (horseA > horseB) {
                return 1;
              }
            return horseA - horseB
          })
    }

    res.render('horses/index', {
        title: 'All Horses',
        horses,
        showAllLink: !req.query.search,
    })
}

async function show(req, res) {
    const horse = await Horse.findOne({ _id: req.params.id, user: req.user._id }).populate('barns');
    const barns = await Barn.find({ user: req.user._id });
    res.render('horses/show', {
        horse,
        barns,
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
    req.body.user = req.user._id;
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

async function updateHorses(req, res) {
    const barn = await Barn.findOne({ _id: req.params.id, user: req.user._id }).populate('horses');
    const horse = await Horse.findOne({ _id: req.body.horseId }).populate('barns');

    if (req.query.action === 'add') {
        barn.horses.unshift(req.body.horseId);
        horse.barns.push(barn);
    } else if (req.query.action === 'remove') {
        const horseIdx = barn.horses.findIndex(horse => horse._id.equals(req.body.horseId));
        barn.horses.splice(horseIdx, 1);
        horse.barns.splice(0, 1);
    }
    await barn.save();
    await horse.save();
    res.redirect(`/barns/${barn._id}/edit`);
}

async function addToBarn(req, res) {
    const horse = await Horse.findOne({ _id: req.params.id, user: req.user._id }).populate('barns');
    const barn = await Barn.findOne({ _id: req.body.barnId }).populate('horses');

    horse.barns.push(req.body.barnId);
    barn.horses.unshift(horse);

    await barn.save();
    await horse.save();
    res.redirect(`/horses/${horse._id}`);
}

async function edit(req, res) {
    const horse = await Horse.findOne({ _id: req.params.id, user: req.user._id }).populate('barns');
    res.render('horses/edit', {
        title: 'Edit Horse Details',
        horse
    });
}

async function updateHorse(req, res) {
    const horse = await Horse.findOneAndUpdate( { _id: req.params.id, user: req.user._id }, req.body);
    horse.feed.splice(0, 1, req.body);
    await horse.save();
    res.redirect(`/horses/${horse._id}`);
}