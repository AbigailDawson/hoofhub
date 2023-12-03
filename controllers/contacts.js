const Barn = require('../models/barn');
const Contact = require('../models/contact');

module.exports = {
    addToContacts
};

async function addToContacts(req, res) {
    const barn = await Barn.findById(req.params.id);
    barn.contacts.push(req.body.contactId);
    await barn.save();
    res.redirect(`/barns/${barn._id}/edit`);
}