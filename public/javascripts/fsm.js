var make_fsm = function(initial_data, controller) { 
  var players = initial_data.meta.players || "Player 1",
      board_size = initial_data.meta.board.size || {x:19, y:19},
      rules = initial_data.meta.rules || "Japanese",
      game_tree = initial_data.tree.slice(0, 1); //preserve original root node.
      move = 0, //move number
      turn = 0; //players turn
      
      console.log(this);

  var makeMove = function(sgf_elem) {
    move += 1;
    turn ^= 1;
    game_tree.concat(sgf_elem);
  }

  var forward = function() {
    move +=1;
    turn ^= 1;
  }

  //process initial tree
  makeMove.apply(this, initial_data.tree.slice(1, initial_data.tree.length));
}


