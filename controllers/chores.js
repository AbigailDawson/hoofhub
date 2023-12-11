const Barn = require('../models/barn');
const Horse = require('../models/horse');

module.exports = {
    viewChores,
    addChore,
    moveChore,
    checkChore,
    clearChores,
    deleteChore
};

async function viewChores(req, res) {
    const barn = await Barn.findById(req.params.id);
    res.render('barns/chores', {
        barn,
        title: 'Chores'
    })
}

async function addChore(req, res) {
    req.body.user = req.user._id;
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

async function deleteChore(req, res) {
    const barn = await Barn.findOne({
        'chores._id': req.params.choreId // look for chore in the array with id that matches request
    });

    barn.chores.remove(req.params.choreId);
    await barn.save();
    res.redirect(`/barns/${barn._id}/chores`);
}