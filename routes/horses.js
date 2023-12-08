var express = require('express');
var router = express.Router();
const horsesCtrl = require('../controllers/horses');

// GET /horses
router.get('/horses', horsesCtrl.index);

// GET /horse/new
router.get('/horses/new', horsesCtrl.new);

// GET /horses/:id
router.get('/horses/:id', horsesCtrl.show);

// POST /horses
router.post('/horses', horsesCtrl.create);

// POST /barns/:id
router.post('/barns/:id/horses', horsesCtrl.updateHorses);

// POST /horses/:id/barns
router.post('/horses/:id/barns', horsesCtrl.addToBarn);

module.exports = router;