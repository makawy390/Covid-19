var express = require('express');
var router = express.Router();
// )+ Controllers 
// )+ Index controller
let mapCntrl = require('../controllers/mapCntrl');

// )+ Get home
router.get('/', mapCntrl.getMap);
// )+ Get diagnose service


module.exports = router;