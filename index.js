
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

// Winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];



function makeMove(index) {
  if (!gameOver && board[index] === '') {
    board[index] = currentPlayer;
    const cell = document.getElementsByClassName('grid-cell')[index];
    cell.classList.add(currentPlayer.toLowerCase());
    cell.classList.add('disabled');
    cell.innerText = currentPlayer;
    if (checkWin(currentPlayer)) {
      document.getElementsByClassName('game-over-text')[0].innerText = 'Player ' + currentPlayer + ' wins!';
      gameOver = true;
      disableGrid();
    } else if (board.indexOf('') === -1) {
      document.getElementsByClassName('game-over-text')[0].innerText = 'Draw!';
      gameOver = true;
      disableGrid();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      updateStatusText();
    }
  }
}


function checkWin(player) {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }
  return false;
}


function disableGrid() {
  const cells = document.getElementsByClassName('grid-cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.add('disabled');
  }
}


function updateStatusText() {
  document.getElementsByClassName('current-player')[0].innerText = "Its " + currentPlayer + " turn";
}


function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  const cells = document.getElementsByClassName('grid-cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove('x', 'o', 'disabled');
    cells[i].innerText = '';
  }
  document.getElementsByClassName('game-over-text')[0].innerText = '';
  updateStatusText();
}