var express = require('express');
var router = express.Router();

router.use('/static-scan', require('./static-scan'));

module.exports = router;
