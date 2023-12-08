var express = require('express');
var router = express.Router();
const choresCtrl = require('../controllers/chores');

// GET /barns/:id/chores
router.get('/barns/:id/chores', choresCtrl.viewChores);

// GET /barns/:id/chores/:choreId
router.get('/barns/:id/chores/:choreId', choresCtrl.moveChore);

// PUT /barns/:id/chores <-- clear chores
router.put('/barns/:id/chores', choresCtrl.clearChores);

// POST /barns/:id/chores <-- create chore and post to page
router.post('/barns/:id/chores', choresCtrl.addChore)

// POST /barns/:id/chores/:choreID
router.post('/barns/:id/chores/:choreId', choresCtrl.checkChore);

module.exports = router;