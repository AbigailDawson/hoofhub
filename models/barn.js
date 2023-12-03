const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    houseNumber: Number,
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
    address: [addressSchema],
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
        ref: 'Chore'
    }],
    notes: [barnNoteSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Barn', barnSchema)