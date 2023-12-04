const Barn = require('../models/barn');
const Contact = require('../models/contact');
const Horse = require('../models/horse');

module.exports = {
    index,
    addToContacts
};

async function index(req, res) {
    const contacts = await Contact.find({})
        .populate({path: 'horses', model: Horse})
        .populate({path: 'barns', model: Barn})
        console.log(contacts[5]);
    res.render('contacts/index', {
        title: 'All Contacts',
        contacts
    })
}
async function addToContacts(req, res) {
    const barn = await Barn.findById(req.params.id);
    barn.contacts.push(req.body.contactId);
    await barn.save();
    res.redirect(`/barns/${barn._id}/edit`);
}