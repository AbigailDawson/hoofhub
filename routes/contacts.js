var express = require('express');
var router = express.Router();
const contactsCtrl = require('../controllers/contacts');

// GET /contacts
router.get('/contacts', contactsCtrl.index);

// POST /barns/:id
router.post('/barns/:id', contactsCtrl.addToContacts);

module.exports = router;