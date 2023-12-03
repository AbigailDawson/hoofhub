require('dotenv').config();
require('./config/database');
const mongoose = require('mongoose');

const Barn = require('./models/barn');
const Horse = require('./models/horse');
const Contact = require('./models/contact');

const data = require('./data');

(async function() {
    const promise1 = Barn.deleteMany({});
    const promise2 = Horse.deleteMany({});
    const promise3 = Contact.deleteMany({});
    
    // Promise.all will return a single promise that resolves only after all of the array's promises resolve
    let results = await Promise.all([promise1, promise2, promise3]);
    // results will be an array of result objects!
  

    // This time, provide the array of promises in-line
    results = await Promise.all([
      Barn.create(data.barns),
      Horse.create(data.horses),
      Contact.create(data.contacts)
    ]);

    // Push horse IDs into barns
    results[0][0].horses.push(results[1][0]._id, results[1][1]._id, results[1][2]._id);
    results[0][1].horses.push(results[1][3]._id, results[1][4]._id, results[1][5]._id);
    results[0][2].horses.push(results[1][6]._id, results[1][7]._id, results[1][8]._id);

    // Push contact IDs into barns
    results[0][0].contacts.push(results[2][0]._id, results[2][7]._id);
    results[0][1].contacts.push(results[2][8]._id, results[2][14]._id);
    results[0][2].contacts.push(results[2][15]._id);

    // Push contact IDs into horses
    results[1][0].contacts.push(results[2][2]._id, results[2][19]._id)
    results[1][1].contacts.push(results[2][3]._id, results[2][18]._id)
    results[1][2].contacts.push(results[2][4]._id, results[2][17]._id)
    results[1][3].contacts.push(results[2][5]._id, results[2][16]._id)
    results[1][4].contacts.push(results[2][6]._id)
    results[1][5].contacts.push(results[2][9]._id)
    results[1][6].contacts.push(results[2][10]._id)
    results[1][7].contacts.push(results[2][11]._id)
    results[1][8].contacts.push(results[2][12]._id)

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

    // push barn IDs into contacts
    results[2][0].barns.push(results[0][0]._id);
    results[2][7].barns.push(results[0][0]._id);
    results[2][8].barns.push(results[0][1]._id);
    results[2][14].barns.push(results[0][1]._id);
    results[2][15].barns.push(results[0][2]._id);

     // push horse IDs into contacts
     results[2][2].horses.push(results[1][0]._id);
     results[2][3].horses.push(results[1][1]._id);
     results[2][4].horses.push(results[1][2]._id);
     results[2][5].horses.push(results[1][3]._id);
     results[2][6].horses.push(results[1][4]._id);
     results[2][9].horses.push(results[1][5]._id);
     results[2][10].horses.push(results[1][6]._id);
     results[2][11].horses.push(results[1][7]._id);
     results[2][12].horses.push(results[1][8]._id);
     results[2][16].horses.push(results[1][3]._id);
     results[2][17].horses.push(results[1][2]._id);
     results[2][18].horses.push(results[1][1]._id);
     results[2][19].horses.push(results[1][0]._id);
 

    // Save barns
    await results[0][0].save();
    await results[0][1].save();
    await results[0][2].save();

    // Save horses
    await results[1][0].save();
    await results[1][1].save();
    await results[1][2].save();
    await results[1][3].save();
    await results[1][4].save();
    await results[1][5].save();
    await results[1][6].save();
    await results[1][7].save();
    await results[1][8].save();

    // Save contacts
    await results[2][0].save();
    await results[2][1].save();
    await results[2][2].save();
    await results[2][3].save();
    await results[2][4].save();
    await results[2][5].save();
    await results[2][6].save();
    await results[2][7].save();
    await results[2][8].save();
    await results[2][9].save();
    await results[2][10].save();
    await results[2][11].save();
    await results[2][12].save();
    await results[2][13].save();
    await results[2][14].save();
    await results[2][15].save();
    await results[2][16].save();
    await results[2][17].save();
    await results[2][18].save();
    await results[2][19].save();

    process.exit();
})();