var sgf = require('sgf');
var fs = require('fs');

var get_arguments = function(sgf_element, command) {
  return sgf_element.filter( function(obj) { return obj.command == command; })[0]["arguments"];
}

var get_argument = function(sgf_element, command) {
  return get_arguments(sgf_element, command)[0];
}


var get_meta = function(sgf_contents) {
  return {
    "players": { 
      "white": {
        "name": get_argument(sgf_contents[0], "PW"),
        "rank": get_argument(sgf_contents[0], "WR")
      },
      "black": {
        "name": get_argument(sgf_contents[0], "PB"),
        "rank": get_argument(sgf_contents[0], "BR")
      }
    },
    "board": {
      "size": get_argument(sgf_contents[0], "SZ")
    }
  };
}

var example_sgf = sgf(fs.readFileSync('example.sgf').toString());
console.log(get_meta(example_sgf));
