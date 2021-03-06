var make_cell = function(id) {
  var cell = document.createElement('td');
  cell.classList.add("goban-cell");
  cell.id = id;

  var putStone = function(color) {
    cell.classList.add(color);
  }

  var removeStone = function() {
    cell.classList.remove("black");
    cell.classList.remove("white");
  }

  cell.addEventListener('putStone', function (evt) {
    if(evt.detail.id === this.id) {
      this.putStone(evt.detail.color);
      console.log(evt);
    }
  });
  return cell;
}

var make_board = function(gobanController, size) {
  var gobanController = gobanController;
  var table = document.createElement('table');
  table.className = "goban";

  var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // make cells
  for(j = 0; j < size.y; j++){
    var tr = document.createElement('tr');
    for(i = 0; i < size.y; i++){
      var td = make_cell(letters.charAt(i)+letters.charAt(j));
      td.onclick = function(event) {
        var moveEvent = new Event('goban-click', {bubbles:true});
        this.dispatchEvent(moveEvent);
      };
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  var place_stone = function(color, pos) {
    table.childNodes[pos.y].childNodes[pos.x].add_class(color);
  }

  return table;
}

