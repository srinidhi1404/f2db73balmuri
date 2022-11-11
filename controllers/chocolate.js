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
exports.chocolate_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await chocolate.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle chocolate delete form on DELETE.
exports.chocolate_delete = async function(req, res) {
    console.log("delete "  + req.params.id) 
    try { 
        result = await chocolate.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle chocolate update form on PUT.
exports.chocolate_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await chocolate.findById( req.params.id)
// Do updates of properties
if(req.body.choclateName)
toUpdate.choclateName = req.body.choclateName;
if(req.body.chocolateCost) toUpdate.chocolateCost = req.body.chocolateCost;
if(req.body.quantityAvailable) toUpdate.quantityAvailable = req.body.quantityAvailable;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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
    // {"choclateName":"goat", "chocolateCost":12, "quantityAvailable":"large"}
    document.choclateName = req.body.choclateName;
    document.chocolatechocolateCost = req.body.chocolatechocolateCost;
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

    exports.chocolate_create_Page =  function(req, res) { 
        console.log("create view") 
        try{ 
            res.render('chocolateCreate', { title: 'Create Chocolate'}); 
        } 
        catch(err){ 
            res.status(500) 
            res.send(`{'error': '${err}'}`); 
        } 
    };


    exports.chocolate_view_one_Page = async function(req, res) { 
        console.log("single view for id "  + req.query.id) 
        try{ 
            result = await chocolate.findById( req.query.id) 
            res.render('chocolateInspect',  
    { title: 'Chocolate Detail', toShow: result }); 
        } 
        catch(err){ 
            res.status(500) 
            res.send(`{'error': '${err}'}`); 
        } 
    };

    exports.chocolate_update_Page =  async function(req, res) { 
        console.log("update view for item "+req.query.id) 
        try{ 
            let result = await chocolate.findById(req.query.id) 
            res.render('chocolateUpdate', { title: 'chocolate Update', toShow: result }); 
        } 
        catch(err){ 
            res.status(500) 
            res.send(`{'error': '${err}'}`); 
        } 
    };

    exports.chocolate_delete_Page = async function(req, res) { 
        console.log("Delete view for id "  + req.query.id) 
        try{ 
            result = await chocolate.findById(req.query.id) 
            res.render('chocolateDelete', { title: 'chocolate Delete', toShow: 
    result }); 
        } 
        catch(err){ 
            res.status(500) 
            res.send(`{'error': '${err}'}`); 
        } 
    };