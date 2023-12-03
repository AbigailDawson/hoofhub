require('dotenv').config();
require('./config/database');
const mongoose = require('mongoose');

const Barn = require('./models/barn');
const Horse = require('./models/horse');

const data = require('./data');

(async function() {
    const promise1 = Barn.deleteMany({});
    const promise2 = Horse.deleteMany({});
    
    // Promise.all will return a single promise that resolves only after all of the array's promises resolve
    let results = await Promise.all([promise1, promise2]);
    // results will be an array of result objects!
    console.log('results after promise1 and promise2: ', results);
  
    // This time, provide the array of promises in-line
    results = await Promise.all([
      Barn.create(data.barns),
      Horse.create(data.horses)
    ]);

    // Push horse IDs into barns
    results[0][0].horses.push(results[1][0]._id, results[1][1]._id, results[1][2]._id);
    results[0][1].horses.push(results[1][3]._id, results[1][4]._id, results[1][5]._id);
    results[0][2].horses.push(results[1][6]._id, results[1][7]._id, results[1][8]._id);

    // Push barn IDs into horses
    results[1][0].barns.push(results[0][0]._id);
    results[1][1].barns.push(results[0][0]._id);
    results[1][2].barns.push(results[0][0]._id);
    results[1][3].barns.push(results[0][1]._id);
    results[1][4].barns.push(results[0][1]._id);
    results[1][5].barns.push(results[0][1]._id);
    results[1][6].barns.push(results[0][2]._id);
    results[1][7].barns.push(results[0][2]._id);
    results[1][8].barns.push(results[0][2]._id);

    console.log(results[1][0]);
    
    process.exit();
})();