const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    houseNumber: String,
    street: String,
    city: String,
    state: String,
    zip: Number
});

const barnNoteSchema = new Schema({
    dateAdded: Date,
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const barnSchema = new Schema({
    name: String,
    address: {
        type: [addressSchema],
        required: true
    },
    contacts: [{
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    }],
    horses: [{
        type: Schema.Types.ObjectId,
        ref: 'Horse'
    }],
    chores: [{
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    }],
    notes: [barnNoteSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Barn', barnSchema)