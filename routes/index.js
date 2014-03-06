var attachHandlers = function(server){
  require('./sgf')(server);
  require('./upload')(server);
  require('./show')(server);
};

exports.attachHandlers = attachHandlers;
