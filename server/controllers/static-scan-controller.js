var http = require('http');
var https = require('https');
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

exports.getFakeData = function()
{
  var url = 'https:///posts';

  var options = {
    host: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/posts'
  };
  
  https.get(options, function(resp){
    resp.on('data', function(chunk){
      return chunk;
    });
  }).on("error", function(e){
    return [];
    //console.log("Got error: " + e.message);
  });

}



