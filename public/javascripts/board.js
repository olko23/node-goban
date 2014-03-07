var make_cell = function(id) {
  var cell = document.createElement('td');
  cell.classList.add("goban-cell");
  cell.id = id;

  var add_class = function(cls) {
    cell.classList.add(cls);
  }
  return cell;
}

var make_board = function(gobanController, size) {
  var gobanController = gobanController;
  var table = document.createElement('table');
  table.className = "goban";
  container.appendChild(table);

  var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // make cells
  for(j = 0; j < size.y; j++){
    var tr = document.createElement('tr');
    for(i = 0; i < size.y; i++){
      var td = make_cell(letters.charAt(i)+letters.charAt(j));
      td.onclick = function(event) { this.style.backgroundColor = "black"; };
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  var place_stone = function(color, pos) {
    table.childNodes[pos.y].childNodes[pos.x].add_class(color);
  }

  return {"goban": table };
}

