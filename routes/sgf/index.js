module.exports = function attachHandlers(server) {
  server.get('/getJson', getJSON);
}

var getJSON = function(req, res) {
  res.send(req.session.gameData);
}
