module.exports = function attachHandlers(server) {
  server.get('/show', show);
}

var show = function(req, res) {
  var gameData = req.session.gameData;
  res.render('show', {gameData: gameData});
}
