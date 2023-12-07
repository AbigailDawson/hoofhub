const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    streetAddress: String,
    street: String,
    city: String,
    state: String,
    zip: String
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
    chore: {
        type: String,
        possibleValues: ['Muck stalls', 'Fill water', 'Feed grain', 'Feed hay']
    },
    notes: String,
    completed: Boolean
});

const barnSchema = new Schema({
    name: String,
    address: {
        type: [addressSchema],
        default: [],
    },
    contacts: [{
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    }],
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