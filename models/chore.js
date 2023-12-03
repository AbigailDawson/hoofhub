const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const choreSchema = new Schema({
    chore: String,
    shift: {
        type: [String],
        enum: ['AM', 'Midday', 'PM', 'Night']
    },
    estDuration: Number,
    estAmount: Number,
    completed: Boolean
});

module.exports = mongoose.model('Chore', choreSchema)