module.exports = function attachHandlers(server) {
  server.get('/show', show);
}

var show = function(req, res) {
  var gameTree = req.session.gameTree;
  console.log(gameTree);
  res.render('show', {gameTree: gameTree});
}
