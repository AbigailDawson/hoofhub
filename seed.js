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
    // const promise4 = Chore.deleteMany({});
    
    // Promise.all will return a single promise that resolves only after all of the array's promises resolve
    let results = await Promise.all([promise1, promise2, promise3]);
    // results will be an array of result objects!
  

    // This time, provide the array of promises in-line
    results = await Promise.all([
      Barn.create(data.barns),
      Horse.create(data.horses),
      Contact.create(data.contacts),
      // Chore.create(data.chores)
    ]);

    const willowBrookRanch = results[0][0];
    const pineGroveFarm = results[0][1];
    const highMeadows = results[0][2];

    const luna = results[1][0];
    const max = results[1][1];
    const bella = results[1][2];
    const orion = results[1][3];
    const shadow = results[1][4];
    const rosie = results[1][5];
    const spirit = results[1][6];
    const thunder = results[1][7];
    const misty = results[1][8];
    const whisper = results[1][9];
    const willow = results[1][10];
    const rala = results[1][11];
    const amiga = results[1][12];
    const star = results[1][13];
    const phoenix = results[1][14];
    const maggie = results[1][15];
    const dakota = results[1][16];
    const apollo = results[1][17];
    const river = results[1][18];
    const atlas = results[1][19];

    const emily = results[2][0];
    const sophia = results[2][1];
    const isabella = results[2][2];
    const ava = results[2][3];
    const mia = results[2][4];
    const liam = results[2][5];
    const noah = results[2][6];
    const olivia = results[2][7];
    const emma = results[2][8];
    const charlotte = results[2][9];
    const elijah = results[2][10];
    const grace = results[2][11];
    const harper = results[2][12];
    const aiden = results[2][13];
    const amelia = results[2][14];
    const martina = results[2][15];
    const ethan = results[2][16];
    const evelyn = results[2][17];
    const mason = results[2][18];
    const layla = results[2][19];

    // const feedGrain = results[3][0];
    // const feedHay = results[3][1];
    // const muckStalls = results[3][2];
    // const turnOut = results[3][3];
    // const turnIn = results[3][4];
    // const fillWater = results[3][5];
    // const groomHorses = results[3][6];

    // Push horse IDs into barns
    willowBrookRanch.horses.push(
      luna._id, 
      max._id, 
      bella._id, 
      orion._id, 
      shadow._id,
      rosie._id,
      spirit._id,
      thunder._id,
      misty._id,
      whisper._id,
      willow._id,
      rala._id,
      amiga._id,
      star._id,
      phoenix._id,
      maggie._id,
      dakota._id,
      apollo._id,
      river._id,
      atlas._id,
      );
    pineGroveFarm.horses.push(
      luna._id, 
      max._id, 
      bella._id, 
      orion._id, 
      shadow._id,
      rosie._id,
      spirit._id,
      thunder._id,
      misty._id,
      whisper._id,
      willow._id,
      rala._id,
      amiga._id,
      star._id,
      phoenix._id,
      maggie._id,
      dakota._id,
      apollo._id,
      river._id,
      atlas._id,
      );
    highMeadows.horses.push(
      luna._id, 
      max._id, 
      bella._id, 
      orion._id, 
      shadow._id,
      rosie._id,
      spirit._id,
      thunder._id,
      misty._id,
      whisper._id,
      willow._id,
      rala._id,
      amiga._id,
      star._id,
      phoenix._id,
      maggie._id,
      dakota._id,
      apollo._id,
      river._id,
      atlas._id,
      );

    // Push contact IDs into barns
    willowBrookRanch.contacts.push(emily._id, olivia._id);
    pineGroveFarm.contacts.push(emma._id, amelia._id);
    highMeadows.contacts.push(martina._id);

    // Push contact IDs into horses
    luna.contacts.push(isabella._id, layla._id)
    max.contacts.push(ava._id, mason._id)
    bella.contacts.push(mia._id, evelyn._id)
    orion.contacts.push(liam._id, ethan._id)
    shadow.contacts.push(noah._id)
    rosie.contacts.push(charlotte._id)
    spirit.contacts.push(elijah._id)
    thunder.contacts.push(grace._id)
    misty.contacts.push(harper._id)

    // Push barn IDs into horses
    luna.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    max.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    bella.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    orion.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    shadow.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    rosie.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    spirit.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    thunder.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    misty.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    whisper.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    willow.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    rala.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    amiga.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    star.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    maggie.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    dakota.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    apollo.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    river.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);
    atlas.barns.push(willowBrookRanch._id, pineGroveFarm._id, highMeadows._id);

    // push barn IDs into contacts
    emily.barns.push(willowBrookRanch._id);
    olivia.barns.push(willowBrookRanch._id);
    emma.barns.push(pineGroveFarm._id);
    amelia.barns.push(pineGroveFarm._id);
    martina.barns.push(highMeadows._id);

    // push horse IDs into contacts
    isabella.horses.push(luna._id);
    ava.horses.push(max._id);
    mia.horses.push(bella._id);
    liam.horses.push(orion._id);
    noah.horses.push(shadow._id);
    charlotte.horses.push(rosie._id);
    elijah.horses.push(spirit._id);
    grace.horses.push(thunder._id);
    harper.horses.push(misty._id);
    ethan.horses.push(orion._id);
    evelyn.horses.push(bella._id);
    mason.horses.push(max._id);
    layla.horses.push(luna._id);
 
    // Push chore IDs into barns
    // willowBrookRanch.chores.push(feedGrain._id, feedHay._id, turnOut._id);
    // pineGroveFarm.chores.push(feedGrain._id, feedHay._id, turnIn._id, muckStalls._id, fillWater._id);
    // highMeadows.chores.push(muckStalls._id, fillWater._id, groomHorses._id);

    // Save barns
    await willowBrookRanch.save();
    await pineGroveFarm.save();
    await highMeadows.save();

    // Save horses
    await luna.save();
    await max.save();
    await bella.save();
    await orion.save();
    await shadow.save();
    await rosie.save();
    await spirit.save();
    await thunder.save();
    await misty.save();

    // Save contacts
    await emily.save();
    await sophia.save();
    await isabella.save();
    await ava.save();
    await mia.save();
    await liam.save();
    await noah.save();
    await olivia.save();
    await emma.save();
    await charlotte.save();
    await elijah.save();
    await grace.save();
    await harper.save();
    await aiden.save();
    await amelia.save();
    await martina.save();
    await ethan.save();
    await evelyn.save();
    await mason.save();
    await layla.save();

    // Save chores
    // await feedGrain.save();
    // await feedHay.save();
    // await muckStalls.save();
    // await turnOut.save();
    // await turnIn.save();
    // await fillWater.save();
    // await groomHorses.save();

    process.exit();
})();