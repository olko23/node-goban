var sgfParser = require('./sgf_parser.js');

var toJSON = function(sgf) {
  
  //debug
  var fs = require('fs');
  var sgf = fs.readFileSync('./example.sgf').toString();
  return sgfParser.parse(sgf)[0];
}

exports.toJSON = toJSON;
