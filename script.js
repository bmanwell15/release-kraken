var board = [], moves = []

function randomInt(n){return Math.round(Math.random()*n);}
/* 
  Treasure = 1
  Giant Octopus = 2
  Bonus = 3
  Shark = 4
  Kraken = 5
  Davey Jones Locker = 6
  Friendly Dolphin = 7
  Magalodon = 8
  switch = 9
*/
for (var w = 0;w < 6;w++) {
  board.push(new Array())
  for (var h = 0;h < 6;h++) {
    board[w].push(Math.ceil(Math.random()*4))
  }
}

for (var i = 0;i < 4;i++) {board[randomInt(5)][randomInt(5)] = 5} // KRAKEN
for (var i = 0;i < 4;i++) {var x = randomInt(5), y = randomInt(5);board[x][y] < 5 ? board[x][y] = 6 : i--} // Locker
for (var i = 0;i < 2;i++) {var x = randomInt(5), y = randomInt(5);board[x][y] < 5 ? board[x][y] = 7 : i--} // Dolphin
for (var i = 0;i < 1;i++) {var x = randomInt(5), y = randomInt(5);board[x][y] < 5 ? board[x][y] = 8 : i--} // Magalodon
for (var i = 0;i < 2;i++) {var x = randomInt(5), y = randomInt(5);board[x][y] < 5 ? board[x][y] = 9 : i--} // Switch

function clickTile(tile) { // column, row
  var check = board[tile[0]-1][tile[1]-1], DOM = document.getElementById(tile[0] + "-" + tile[1])
  
  if (check == 1) {DOM.innerHTML = "<span style='color:#b00;font-weight:bold'>Treasure</span>"} else
  if (check == 2) {DOM.innerHTML = "Giant Octopus (-2)";DOM.style.paddingTop = "9%";DOM.style.height = "75%";DOM.style.fontSize = "0.88em"} else
  if (check == 3) {DOM.innerHTML = "<span style='color:#909;font-size:0.9em'>Bonus (+10)</span>"} else
  if (check == 4) {DOM.innerHTML = "Shark (-1)"} else
  if (check == 5) {DOM.innerHTML = "<b>Kraken</b>"} else
  if (check == 6) {DOM.innerHTML = "Davey Jones Locker";DOM.style.paddingTop = "9%";DOM.style.height = "75%";DOM.style.fontSize = "0.88em"} else
  if (check == 7) {DOM.innerHTML = "<span style='color:blue'>Friendly Dolphin</span>";DOM.style.paddingTop = "9%";DOM.style.height = "75%"} else
  if (check == 8) {DOM.innerHTML = "<i>Magalodon</i>"} else
  if (check == 9) {DOM.innerHTML = "<span style='color:#070;font-weight:bold'>Switch</span>"}
  
  moves.push(tile[0], tile[1]);
  
  DOM.style.display = "block"
  $("#" + tile[0] + "-" + tile[1]).animate({opacity: 1}, 1000)
}

function undo() {
  $("#" + moves[moves.length-2] + "-" + moves[moves.length-1]).animate({opacity: 0}, 1000, () => {
    document.getElementById(moves[moves.length-2] + "-" + moves[moves.length-1]).style.height = "60%"
    document.getElementById(moves[moves.length-2] + "-" + moves[moves.length-1]).style.paddingTop = "18%"
    document.getElementById(moves[moves.length-2] + "-" + moves[moves.length-1]).style.fontSize = "1em"
    board[moves[moves.length-2]-1][moves[moves.length-1]-1] = Math.ceil(Math.random()*4)
    moves.pop();moves.pop()
  })
}