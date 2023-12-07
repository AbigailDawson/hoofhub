const Barn = require('../models/barn');
const Contact = require('../models/contact');
const Horse = require('../models/horse');

module.exports = {
    index,
    show,
    new: newBarn,
    create,
    edit,
    update,
    delete: deleteBarn,
    viewChores,
    addChore,
    moveChore,
    checkChore,
    clearChores
};

async function index(req, res) {
    const barns = await Barn.find({}).populate('contacts horses');
    res.render('barns/index', {
        title: 'All Barns',
        barns
    })
}

async function show(req, res) {

    const barn = await Barn.findById(req.params.id).populate('contacts horses')

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
    const barn = await Barn.findById(req.params.id).populate('contacts horses');
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

async function viewChores(req, res) {
    const barn = await Barn.findById(req.params.id);
    res.render('barns/chores', {
        barn,
        title: 'Chores'
    })
}

async function addChore(req, res) {
    const barn = await Barn.findById(req.params.id);
    req.body.completed = false;    
    barn.chores.push(req.body);
    try {
      await barn.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/barns/${barn._id}/chores`);
  }

async function moveChore(req, res) {
    const barn = await Barn.findOne({
        'chores._id': req.params.choreId // look for chore in the array with id that matches request
    });

    const chore = barn.chores.id(req.params.choreId);
    const choreIdx = barn.chores.findIndex(chore => chore._id.equals(req.params.choreId));
    const direction = req.query.direction;

    if (direction === 'up' && choreIdx > 0) {
        const removedChore = barn.chores.splice(choreIdx, 1)[0];
        barn.chores.splice(choreIdx - 1, 0, removedChore);
    } else if (direction === 'down' && choreIdx !== barn.chores.length - 1) {
        const removedChore = barn.chores.splice(choreIdx, 1)[0];
        barn.chores.splice(choreIdx + 1, 0, removedChore);
    } 
    await barn.save();
    res.redirect(`/barns/${barn._id}/chores`);
}

async function checkChore(req, res) {
    const barn = await Barn.findOne({
        'chores._id': req.params.choreId // look for chore in the array with id that matches request
    });

    const chore = barn.chores.id(req.params.choreId);
    if (req.body.completed === 'true') {
        chore.completed = true;
        const choreIdx = barn.chores.findIndex(chore => chore._id.equals(req.params.choreId));
        if (choreIdx !== -1 && choreIdx !== barn.chores.length - 1) {
            const [removedChore] = barn.chores.splice(choreIdx, 1);
            barn.chores.push(removedChore);
        }

    } else {
        chore.completed = false;
    }

    await barn.save();
    res.redirect(`/barns/${barn._id}/chores`);
}

async function clearChores(req, res) {
    const barn = await Barn.findById(req.params.id);
    barn.chores.forEach((chore) => {
        chore.completed = false;
    })
    
    await barn.save();
    res.render('barns/chores', {
        barn,
        title: 'Chores'
    })
}