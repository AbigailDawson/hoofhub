var express = require('express');
var router = express.Router();
const barnsCtrl = require('../controllers/barns');

// GET /barns
router.get('/', barnsCtrl.index);

// GET /barns/new
router.get('/new', barnsCtrl.new);

// GET /barns/:id
router.get('/:id', barnsCtrl.show);

// GET /barns/:id/horses
router.get('/:id/horses', barnsCtrl.show);

// GET /barns/:id/chores
router.get('/:id/chores', barnsCtrl.viewChores);

// GET /barns/:id/edit
router.get('/:id/edit', barnsCtrl.edit);

// PUT /barns/:id
router.put('/:id', barnsCtrl.update)

// POST /barns
router.post('/', barnsCtrl.create);

// POST /barns/:id/chores <-- create chore and post to page
router.post('/:id/chores', barnsCtrl.addChore)

// DELETE /barns/:id
router.delete('/:id', barnsCtrl.delete);

module.exports = router;