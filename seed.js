require('dotenv').config();
require('./config/database');

const Barn = require('./models/barn');
const Horse = require('./models/horse');

const data = require('./data');

const seedDB = async () => {
    try {
        await Barn.deleteMany({});
        await Horse.deleteMany({});

        const addedHorses = await Horse.insertMany(seedHorses);
        const barnsWithHorses = [
            { ...seedBarns[0], 
                horses: [
                    addedHorses[0]._id, 
                    addedHorses[1]._id,
                    addedHorses[2]._id,
                ] 
            },
            { ...seedBarns[1], 
                horses: [
                    addedHorses[3]._id,
                    addedHorses[4]._id,
                    addedHorses[5]._id,
                ] 
            },
            { ...seedBarns[2], 
                horses: [
                    addedHorses[6]._id,
                    addedHorses[7]._id,
                    addedHorses[8]._id,
                ] 
            }
        ];

        // Insert barns with references to horses
        await Barn.insertMany(barnsWithHorses);
    } catch (err) {
        console.error(err);
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});