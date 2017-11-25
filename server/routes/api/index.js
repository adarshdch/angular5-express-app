var express = require('express');
var router = express.Router();

router.use('/static-scan', require('./static-scan'));
router.use('/fake', require('./fake'));

module.exports = router;
