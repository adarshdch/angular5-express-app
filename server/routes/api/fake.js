var router = require('express').Router();
var fakeController = require('../../controllers/fake-controller');

router.get('/', function(req, res) {
  fakeController.getAll(function(data){
    res.send(data);
  });
});


// api/static-scan/:sealId
router.get('/:id', function(req, res) {
  fakeController.getById(req.params.id, function(data){
    console.log('api data is: ' + data);
    res.send(data);
  });
});

module.exports = router;