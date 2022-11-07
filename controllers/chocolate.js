var chocolate = require('../models/chocolate');
// List of all chocolates
exports.chocolate_list = function(req, res) {
 res.send('NOT IMPLEMENTED: chocolate list');
};
// for a specific chocolate.
exports.chocolate_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: chocolate detail: ' + req.params.id);
};
// Handle chocolate create on POST.
exports.chocolate_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: chocolate create POST');
};
// Handle chocolate delete form on DELETE.
exports.chocolate_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: chocolate delete DELETE ' + req.params.id);
};
// Handle chocolate update form on PUT.
exports.chocolate_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: chocolate update PUT' + req.params.id);
};