const Barn = require('../models/barn');
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
    const barns = await Barn.find({ user: req.user._id }).populate('horses');
    res.render('barns/index', {
        title: 'All Barns',
        barns
    })
}

async function show(req, res) {
    const barn = await Barn.findById(req.params.id).populate('horses')
    if (req.query.sort === 'age') {
        barn.horses.sort((a, b) => a[req.query.sort] - b[req.query.sort])
    } else if (req.query.sort === 'name') {
        barn.horses.sort((a, b) => {
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
    req.body.user = req.user._id;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const barn = await Barn.create(req.body);
        barn.contact.push(req.body);
        barn.address.push(req.body);
        await barn.save();
        res.redirect(`/barns/${barn._id}`);
    } catch (err) {
        console.log(err);
        res.render('barns/new', { errorMsg: err.message });
    }
}

async function edit(req, res) {
    const barn = await Barn.findById(req.params.id).populate('horses');
    const horses = await Horse.find({ _id: { $nin: barn.horses } }).sort('name');
    res.render('barns/edit', {
        barn,
        horses,
        title: `Edit ${barn.name}`
    })
}

async function update(req, res) {
    const barn = await Barn.findOneAndUpdate( { _id: req.params.id }, req.body);
    barn.address.splice(0, 1, req.body);
    barn.contact.splice(0, 1, req.body);
    await barn.save();
    res.redirect('/barns')
}

async function deleteBarn(req, res) {
    const barn = await Barn.findOneAndDelete({ _id: req.params.id });
    res.redirect('/barns')
}