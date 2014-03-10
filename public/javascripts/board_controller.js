var boardController = function(container, initial_data) {
  var container = container,
      fsm,
      board,
      self = this;

  fsm = make_fsm(initial_data, self);
  this.addEventListener('goban-click', function(evt) { console.log(evt.srcElement.id); console.log(evt); });
  board = make_board(self, {x:initial_data.meta.board.size, y:initial_data.meta.board.size});
  container.appendChild(board);
}

$.getJSON('/getJson', function(data) {
  var controller = boardController($.find('#board_container')[0], data);
});
