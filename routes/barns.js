var express = require('express');
var router = express.Router();
const barnsCtrl = require('../controllers/barns');

// GET /barns
router.get('/', barnsCtrl.index);

// GET /barns/:id
router.get('/:id', barnsCtrl.show);

module.exports = router;