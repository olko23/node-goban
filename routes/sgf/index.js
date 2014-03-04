var sgf = require('../../lib/sgf.js');

module.exports = function attachHandlers(server) {
  server.get('/json', getJSON);
}

var getJSON = function(req, res) {
  res.send(sgf.toJSON(null));
}

