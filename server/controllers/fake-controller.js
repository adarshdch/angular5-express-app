var http = require('http');
var https = require('https');

exports.getAll = function(callback)
{
  var options = {
    host: 'jsonplaceholder.typicode.com',
    port: 80,
    method: 'GET',
    path: '/posts'
  };

  return http.request(options, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      callback(body);
    });
  }).on("error", function(e){
    callback(null);
  }).end();

}

exports.getById = function(id, callback)
{
  var options = {
    host: 'jsonplaceholder.typicode.com',
    port: 80,
    method: 'GET',
    path: '/posts/' + id
  };

  return http.request(options, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      callback(body);
    });
  }).on("error", function(e){
    callback(null);
  }).end();

}
