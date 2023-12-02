require('dotenv').config();
require('./config/database');

const mongoose = require('mongoose');
const Barn = require('./models/barn');

const seedBarns = [
    {
        name: 'Willow Brook Ranch',
        address: {
            houseNumber: 123,
            street: 'Main St',
            city: 'Springfield',
            state: 'VA',
            zip: 12345
        },
        notes: {
            content: 'Use second driveway'
        }
    },
    {
        name: 'Retirement Farm',
        address: {
            houseNumber: 456,
            street: 'Side St',
            city: 'Townesville',
            state: 'VA',
            zip: 54321
        },
        notes: {
            content: 'Park behind barn'
        }
    },
    {
        name: 'Sporthorse Stable',
        address: {
            houseNumber: 404,
            street: 'West St',
            city: 'Centreville',
            state: 'VA',
            zip: 40404
        },
        notes: {
            content: 'Send text to owner when leaving for the day!'
        }
    },
]

const seedDB = async () => {
    await Barn.deleteMany({});
    await Barn.insertMany(seedBarns);
};

seedDB().then(() => {
    mongoose.connection.close();
});