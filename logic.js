let players = ['x', 'o'];
let activePlayer;
let board;

function startGame() {
 board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  activePlayer = Math.round(Math.random());
  console.log('Первым ходит игрок: ' + (activePlayer + 1));
  alert('Первым ходит игрок: ' + (activePlayer + 1));
  renderBoard(board);
}

function click(row,column) {
  
  board[row][column] = players[activePlayer];
  renderBoard(board);
  checkWinner(row,column);

  activePlayer = activePlayer === 0 ? 1 : 0;

  //activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
  
  //if (activePlayer == 0) {
  // activePlayer = 1;
  //} else {
  // activePlayer = 0;
  //}
}

function checkWinner() {

  let move = players[activePlayer];

  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board.length; j++) {

      if (board[i][0] == move && board[i][1] == move && board[i][2] == move) {
        showWinner(activePlayer);
      } else if (board[0][j] == move && board[1][j] == move && board[2][j] == move) {
        showWinner(activePlayer);
      } else if (board[0][0] == move && board[1][1] == move && board[2][2] == move) {
        showWinner(activePlayer);
      } else if (board[0][2] == move && board[1][1] == move && board[2][0] == move) {
        showWinner(activePlayer);
      }
    }
  }
}

