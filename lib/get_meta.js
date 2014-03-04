var get_argument = function(sgf_element, command) {
  try {
    return sgf_element[command][0];
  }
  catch (err) {
    return null;
  }
}

var get_meta = function(game_tree) {
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

