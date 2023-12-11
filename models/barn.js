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
    role: String,
    contactName: String,
    phone: String   
});

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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    chore: String,
    notes: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const barnSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    address: {
        type: [addressSchema],
        default: [],
    },
    contact: [contactSchema],
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