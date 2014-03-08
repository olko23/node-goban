var boardController = function(container, initial_data) {
  var container = container,
      fsm,
      board,
      self = this;

  fsm = make_fsm(initial_data, self);
  board = make_board(self, {x:initial_data.meta.board.size, y:initial_data.meta.board.size});
  console.log(container);
  container.appendChild(board);
}

$.getJSON('/getJson', function(data) {
  var controller = boardController($.find('#board_container')[0], data);
});
