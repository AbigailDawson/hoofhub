const mongoose = require('mongoose');
// const contactSchema = require('./contact');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    amFeed: String,
    amMeds: String,
    middayFeed: String,
    pmFeed: String,
    pmMeds: String,
    nightFeed: String,
});

const horseNoteSchema = new Schema({
    dateAdded: Date,
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const horseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    barns: [{
        type: Schema.Types.ObjectId,
        ref: 'Barn'
    }],
    name: String,
    age: Number,
    color: String,
    sex: String,
    feed: [feedSchema],
    turnout: String,
    blanket: String,
    importantInfo: String,
    notes: [horseNoteSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Horse', horseSchema);