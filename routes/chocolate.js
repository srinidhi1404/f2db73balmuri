var express = require('express');
const chocolate_controlers= require('../controllers/chocolate');
var router = express.Router();
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/* GET home page. */

/* GET costumes */
router.get('/', chocolate_controlers.chocolate_view_all_Page);

router.get('/detail', chocolate_controlers.chocolate_view_one_Page); 

router.get('/create', secured,chocolate_controlers.chocolate_create_Page); 

router.get('/update',secured, chocolate_controlers.chocolate_update_Page);

router.get('/delete',secured, chocolate_controlers.chocolate_delete_Page);




module.exports = router;