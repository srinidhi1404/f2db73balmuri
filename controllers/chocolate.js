var chocolate = require('../models/chocolate');

// List of all chocolates
exports.chocolate_list = async function(req, res) {
    try{
    theChocolates= await chocolate.find();
    res.send(theChocolates);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// for a specific chocolate.
exports.chocolate_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: chocolate detail: ' + req.params.id);
};

// Handle chocolate delete form on DELETE.
exports.chocolate_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: chocolate delete DELETE ' + req.params.id);
};
// Handle chocolate update form on PUT.
exports.chocolate_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: chocolate update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.chocolate_view_all_Page = async function(req, res) {
try{
theChocolates = await chocolate.find();
res.render('chocolate', { title: 'Chocolate Search Results', results: theChocolates });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle chocolate create on POST.
exports.chocolate_create_post = async function(req, res) {
    console.log(req.body)
    let document = new chocolate();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.choclateName = req.body.choclateName;
    document.chocolateCost = req.body.chocolateCost;
    document.quantityAvailable = req.body.quantityAvailable;
    try{
    let results = await document.save();
    res.send(results);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };