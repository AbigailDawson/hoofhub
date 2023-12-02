var express = require('express');
var router = express.Router();
const horsesCtrl = require('../controllers/horses');

// GET /horses
router.get('/', horsesCtrl.index);

module.exports = router;