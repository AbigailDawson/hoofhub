const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    streetAddress: String,
    street: String,
    city: String,
    state: String,
    zip: String
});

const contactSchema = new Schema({
    name: String,
    phone: String
})

const barnNoteSchema = new Schema({
    dateAdded: Date,
    content: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
})

const choreSchema = new Schema({
    chore: String,
    notes: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const barnSchema = new Schema({
    name: String,
    address: {
        type: [addressSchema],
        default: [],
    },
    primaryContact: [contactSchema],
    secondaryContact: [contactSchema],
    horses: [{
        type: Schema.Types.ObjectId,
        ref: 'Horse'
    }],
    chores: [choreSchema],
    notes: [barnNoteSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Barn', barnSchema)