var express = require('express');
var router = express.Router();
const horsesCtrl = require('../controllers/horses');

// GET /horses
router.get('/horses', horsesCtrl.index);

// GET /horses/:id
router.get('/horses/:id', horsesCtrl.show);

module.exports = router;