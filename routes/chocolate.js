var express = require('express');
const chocolate_controlers= require('../controllers/chocolate');
var router = express.Router();

/* GET home page. */

/* GET costumes */
router.get('/', chocolate_controlers.chocolate_view_all_Page);

router.get('/detail', chocolate_controlers.chocolate_view_one_Page); 

router.get('/create', chocolate_controlers.chocolate_create_Page); 

router.get('/update', chocolate_controlers.chocolate_update_Page);

router.get('/delete', chocolate_controlers.chocolate_delete_Page);


module.exports = router;