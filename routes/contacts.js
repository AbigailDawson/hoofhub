var express = require('express');
var router = express.Router();
const contactsCtrl = require('../controllers/contacts');

// GET /contacts
router.get('/contacts', contactsCtrl.index);

// POST /barns/:id/contacts
router.post('/barns/:id/contacts', contactsCtrl.addToContacts);

module.exports = router;