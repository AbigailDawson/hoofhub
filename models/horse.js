const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    amFeed: String,
    middayFeed: String,
    pmFeed: String,
    nightFeed: String,
    supps: String,
    meds: String
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