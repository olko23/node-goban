var attachHandlers = function(server){
  require('./sgf')(server);
  require('./upload')(server);
};

exports.attachHandlers = attachHandlers;
