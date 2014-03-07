module.exports = function attachHandlers(server) {
  server.post('/upload', handleUpload);
  server.get('/upload', renderForm);
}

var handleUpload = function(req, res) {
  var sgf = require('../../lib/sgf.js');
  req.form.on('part', function(part) {
    var data = "";
    part.on('data', function(chunk) {
      data += chunk;
    });
    part.on('end', function() {
//      res.json(sgf.toJSON(data));
      req.session.gameData = sgf.toJSON(data);
      res.redirect('/show');
    });
  });
}

var renderForm = function(req, res) {
  res.render('upload');
}

