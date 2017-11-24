var router = require('express').Router();

// api/static-sca
router.get('/', function(req, res) {
  res.json({ scanResults: [] });
});

// api/static-scan/:sealId
router.get('/:sealId', function(req, res) {
  res.json({ id: req.params.sealId });
});

module.exports = router;