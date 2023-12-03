var express = require('express');
var router = express.Router();
const contactsCtrl = require('../controllers/contacts');

// POST /barns/:id/contacts
router.post('/barns/:id/contacts', contactsCtrl.addToContacts);

module.exports = router;