var express = require('express');
const chocolate_controlers= require('../controllers/chocolate');
var router = express.Router();

/* GET home page. */

/* GET costumes */
router.get('/', chocolate_controlers.chocolate_view_all_Page );

module.exports = router;
