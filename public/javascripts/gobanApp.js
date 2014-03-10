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

var makeGobanElem = function(size) {
  var table = document.createElement('table');
  table.className = "goban";

  var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // make cells
  for(j = 0; j < size; j++){
    var tr = document.createElement('tr');
    for(i = 0; i < size; i++){
      var td = make_cell(letters.charAt(i)+letters.charAt(j));
      td.onclick = function(event) {
        var moveEvent = new Event('goban-click', {bubbles:true});
        this.dispatchEvent(moveEvent);
      };
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}

var gobanApp = angular.module('gobanApp', ['ngSanitize']);
var controllers = {};

controllers.gobanController = function($scope, $http) {
  var gobanState = {B: [], W: []};
  $http.get('/getJson').success(function(data) {
    var makeState = function(sgfElement) {
      if(sgfElement.B) {
        gobanState.B.push(sgfElement.B[0]);
        this.dispatchEvent(new CustomEvent('putStone', {detail: {id:sgfElement.B[0], color:'black'}}));
      }
      if(sgfElement.W) {
        gobanState.W.push(sgfElement.W[0]);
      }
    };
    data.tree.slice(1).forEach(makeState);
    console.log(gobanState);

    $scope.sgfData = data;
    console.log(data);
      
  });
}

gobanApp.controller(controllers);
