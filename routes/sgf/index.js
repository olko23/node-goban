module.exports = function attachHandlers(server) {
  server.get('/json', getJSON);
}

var getJSON = function(req, res) {
  var sgf = require('../../lib/sgf.js');
  res.send(sgf.toJSON(null));
}
