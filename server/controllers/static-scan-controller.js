var StaticScanResult = require('../models/static-scan-result');

exports.getAll = function()
{
  var allResults = [
    new StaticScanResult({sealId: 87270})
  ];

  return allResults;
}

exports.getBySealId = function(sealId) {
  return new StaticScanResult(sealId);
}