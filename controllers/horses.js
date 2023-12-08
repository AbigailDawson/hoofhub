const Horse = require('../models/horse');
const Barn = require('../models/barn');

module.exports = {
    index,
    show,
    new: newHorse,
    create,
    updateHorses
};

async function index(req, res) {
    console.log(req.query.sort)

    let query = {};
    if (req.query.search) {
        query = { name: { $regex: new RegExp(req.query.search, 'i') } };
    }

    const horses = await Horse.find(query).sort({ [req.query.sort]: 1 });

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
        showAllLink: !req.query.search
    })
}

async function show(req, res) {
    const horse = await Horse.findById(req.params.id).populate('barns');
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

async function updateHorses(req, res) {
    const barn = await Barn.findById(req.params.id);
    const horseId = req.body.horseId;

    console.log('BARN.HORSES.LENGTH: ', barn.horses.length)
    console.log('REQ.QUERY: ', req.query);
    console.log('REQ.BODY.HORSEID: ', req.body.horseId);
    
    if (req.query.action === 'add') {
        barn.horses.push(req.body.horseId);
    } else {
        const horseIdx = barn.horses.findIndex(horse => horse._id.equals(req.body.horseId));
        console.log('HORSE IDX: ', horseIdx);

        barn.horses.splice(horseIdx, 1);
        console.log('BARN.HORSES.LENGTH AFTER SPLICE: ', barn.horses.length)
    }

    await barn.save();
    res.redirect(`/barns/${barn._id}/edit`);
}

