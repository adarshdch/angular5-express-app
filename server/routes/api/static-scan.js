var router = require('express').Router();
var staticScanController = require('../../controllers/static-scan-controller');

// api/static-scan
router.get('/', function(req, res) {
  res.send(staticScanController.getAll());
});

// api/static-scan/:sealId
router.get('/:sealId', function(req, res) {
  res.json(staticScanController.getBySealId(req.params.sealId));
});





module.exports = router;