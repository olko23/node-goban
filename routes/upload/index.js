module.exports = function attachHandlers(server) {
  server.post('/upload', handleUpload);
  server.get('/upload', renderForm);
}

var handleUpload = function(req, res) {
  var sgf = require('../../lib/sgf.js');
  var util = require('util');
  req.form.on('part', function(part) {
    part.on('data', function(chunk) {
      res.json(sgf.toJSON(chunk));
    });
  });
  console.log(util.inspect(req.form));
}

var renderForm = function(req, res) {
  res.render('upload');
}

