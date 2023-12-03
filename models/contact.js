const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    role: {
        type: String,
        enum: ['Barn Owner', 'Barn Manager', 'Horse Owner', 'Trainer', 'Veterinarian', 'Farrier', 'Other']
    },
    barns: [{
        type: Schema.Types.ObjectId,
        ref: 'Barn'
    }],
    horses: [{
        type: Schema.Types.ObjectId,
        ref: 'Horse'
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);