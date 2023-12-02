const Horse = require('../models/horse')

module.exports = {
    index,
    // show
};

async function index(req, res) {
    console.log('horses controller function hit')
    const horses = await Horse.find({});
    res.render('horses/index', {
        title: 'All Horses',
        horses
    })
}

// async function show(req, res) {
//     const barn = await Barn.findById(req.params.id);
//     res.render('barns/show', {
//         barn,
//         title: barn.name
//     })
// }