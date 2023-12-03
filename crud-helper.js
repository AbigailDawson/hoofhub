// crud-helper.js

// Used to perform CRUD external to the application

// To use (don't type the $'s):
//   1. Open a Node REPL in Terminal:
//         $ node

//   2. Load this crud-helper.js module
//         $ .load crud-helper.js

//   3. When done CRUDing, exit the REPL with:
//         $ .exit (or ctrl-D, or ctrl-C twice)

// If any changes are made to the models, 
// exit the REPL and reload this module


// If the db connection string is in a .env file, we need 
// to read in those env variables just like in server.js
require('dotenv').config();
// Connect to the database
require('./config/database');

// Require the app's Mongoose models
const Barn = require('./models/barn');
const Horse = require('./models/horse');

// Top-level await (using await outside of an async function)
// has been available since Node v14.8


let barns = await Barn.find({});
let horses = await Horse.find({})
horses[0].barns.push(barns[0])
await horses[0].save()
horses[1].barns.push(barns[0])
await horses[1].save()
horses[2].barns.push(barns[0])
await horses[2].save()
horses[3].barns.push(barns[1])
await horses[3].save()
horses[4].barns.push(barns[1])
await horses[4].save()
horses[5].barns.push(barns[1])
await horses[5].save()
horses[6].barns.push(barns[2])
await horses[6].save()
horses[7].barns.push(barns[2])
await horses[7].save()
horses[8].barns.push(barns[2])
await horses[8].save()