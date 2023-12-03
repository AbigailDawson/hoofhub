var express = require('express');
var router = express.Router();
const barnsCtrl = require('../controllers/barns');

// GET /barns
router.get('/', barnsCtrl.index);

// GET /barns/new
router.get('/new', barnsCtrl.new);

// GET /barns/:id
router.get('/:id', barnsCtrl.show);

// POST /barns
router.post('/', barnsCtrl.create)

module.exports = router;