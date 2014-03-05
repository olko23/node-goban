var sgfParser = require('./sgf_parser.js');

var toJSON = function(sgf_file) {
  var meta,
      parsed;
  try {
    parsed = sgfParser.parse(sgf_file)[0];
    meta = getMeta(parsed);
  }
  catch (err) {
    return "error while parsing sgf";
  }
  return {"meta": meta,
          "tree": parsed };
}

var getMeta = function(game_tree) {
  var get_argument = function(sgf_element, command) {
    try {
     return sgf_element[command][0];
   }
   catch (err) {
     return null;
   }
  }
  return {
    "players": { 
      "white": {
        "name": get_argument(game_tree[0], "PW"),
        "rank": get_argument(game_tree[0], "WR")
      },
      "black": {
        "name": get_argument(game_tree[0], "PB"),
        "rank": get_argument(game_tree[0], "BR")
      }
    },
    "board": {
      "size": get_argument(game_tree[0], "SZ")
    },
    "rules": get_argument(game_tree[0], "RU")
  };
}

exports.toJSON = toJSON;
