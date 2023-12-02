require('dotenv').config();
require('./config/database');

const mongoose = require('mongoose');
const Barn = require('./models/barn');
const Horse = require('./models/horse');

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

const seedHorses = [
    {
        name: 'Luna',
        age: 21,
        color: 'grey',
        sex: 'mare',
        feed: {
            amFeed: '1 scoop senior',
            middayFeed: '1 flake hay',
            pmFeed: '1 scoop senior',
            night: '1 flake hay',
            supps: '1 scoop Cosequin AM only',
            meds: '1 tab Prascend AM only',
        },
        turnout: '4',
        blanket: '35-45deg light sheet, <35 heavy',
        importantInfo: 'Do not turn out alone!',
        notes: {
            content: 'Owner requests that hay be given 1 flake at a time, only if no hay is left in stall.'
        }
    },
    {
        name: 'Max',
        age: 8,
        color: 'chestnut',
        sex: 'gelding',
        feed: {
            amFeed: '2 flakes hay, 1 scoop grain',
            middayFeed: '1 flake hay',
            pmFeed: '2 flakes hay, 1 scoop grain',
            night: '1 flake hay',
            supps: 'none',
            meds: 'none',
        },
        turnout: '6',
        blanket: '40-50deg light blanket, <40 heavy',
        importantInfo: 'Prefers to be turned out with a buddy.',
        notes: {
            content: 'Tends to be nervous around loud noises.'
        }
    },
    {
        name: 'Bella',
        age: 10,
        color: 'black',
        sex: 'mare',
        feed: {
            amFeed: '1 flake hay, 1/2 scoop low carb',
            middayFeed: '1 flake hay',
            pmFeed: '1/2 scoop low carb',
            night: 'none',
            supps: '1/2 scoop joint supplement',
            meds: '1 flake hay',
        },
        turnout: '8',
        blanket: '45-55deg light blanket, <45 heavy',
        importantInfo: 'Owner requests no turnout if raining and <40deg',
        notes: {
            content: 'Loves carrots!'
        }
    },
    {
        name: 'Orion',
        age: 6,
        color: 'bay',
        sex: 'gelding',
        feed: {
            amFeed: '2 flakes hay, 1 scoop grain',
            middayFeed: '1 flake hay',
            pmFeed: '2 flakes hay, 1 scoop grain',
            night: '1 flake hay',
            supps: '1 scoop electrolyte supplement',
            meds: 'none',
        },
        turnout: '5',
        blanket: '35-45deg light sheet, <35 heavy',
        importantInfo: 'Requires extra care during grooming due to sensitive skin.',
        notes: {
            content: 'Owner will be away Dec 21-Jan 1.'
        }
    }
]

const seedDB = async () => {
    await Barn.deleteMany({});
    await Barn.insertMany(seedBarns);
    await Horse.deleteMany({});
    await Horse.insertMany(seedHorses);
};

seedDB().then(() => {
    mongoose.connection.close();
});