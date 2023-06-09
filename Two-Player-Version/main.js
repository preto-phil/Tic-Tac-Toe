//  Display first turn

const firstTurn = (() => {
  function firstXTurn() {
    let startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', () => {
      let turnDiv = document.getElementById('turn');
      let xName = document.getElementById('p1-name').value;
      let variable = 'Turn: ' + xName;
      turnDiv.innerText = variable;
    });
  }

  return {
    firstXTurn,
  };
})();

firstTurn.firstXTurn();

// Toggle Page appear / disappear

const start = (() => {
  function startGame() {
    let startBtn = document.getElementById('start-btn');
    let startPage = document.getElementById('start-page');
    let gamePage = document.getElementById('game-page');
    _toggleNames();
    startBtn.addEventListener('click', () => {
      startPage.style.display = 'none';
      gamePage.style.display = 'grid';
    });
  }

  function _toggleNames() {
    let startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', () => {
      let xName = document.getElementById('p1-name').value;
      console.log(xName);
      let player1Name = document.getElementById('p1');
      let oName = document.getElementById('p2-name').value;
      console.log(oName);
      let player2Name = document.getElementById('p2');
      player1Name.innerText = xName;
      player2Name.innerText = oName;
    });
  }

  return {
    startGame,
  };
})();

start.startGame();

// Game board creation and game Module Patter

const gameBoard = (() => {
  // Array Declaration

  let items = ['', '', '', '', '', '', '', '', ''];

  // Block variable declarations

  let win = false;
  let draw = false;
  let winner;
  let round = 1;
  let game = 1;

  // Toggle reset button to appear

  function _toggleReset() {
    const targetDiv = document.getElementById('gridButton');
    if (win === true || draw === true) {
      targetDiv.style.display = 'block';
    } else {
      targetDiv.style.display = 'none';
    }
  }

  // Toggle and Display Winner function

  function _toggleWinner() {
    const turnDiv = document.getElementById('turn');

    if (win === true) {
      turnDiv.innerHTML = winner;
    }
  }

  // Display draw

  function _toggleDraw() {
    const turnDiv = document.getElementById('turn');

    if (round === 9 && win === false) {
      turnDiv.innerHTML = 'Draw!';
      draw = true;
      _toggleReset();
    }
  }

  // Change game number

  function toggleGame() {
    const gameDiv = document.getElementById('game');
    gameDiv.innerText = `Game ${game}`;
  }

  // Add Score

  const scoreDivX = document.getElementById('p1-score');
  const scoreDivO = document.getElementById('p2-score');
  let oScore = 0;
  let xScore = 0;

  function addScore() {
    scoreDivX.innerText = xScore;
    scoreDivO.innerText = oScore;
  }

  // Winning Conditions

  function _winX() {
    if (
      (items[0] === 'X' && items[1] === 'X' && items[2] === 'X') ||
      (items[0] === 'X' && items[4] === 'X' && items[8] === 'X') ||
      (items[0] === 'X' && items[3] === 'X' && items[6] === 'X') ||
      (items[2] === 'X' && items[5] === 'X' && items[8] === 'X') ||
      (items[2] === 'X' && items[4] === 'X' && items[6] === 'X') ||
      (items[6] === 'X' && items[7] === 'X' && items[8] === 'X') ||
      (items[3] === 'X' && items[4] === 'X' && items[5] === 'X') ||
      (items[1] === 'X' && items[4] === 'X' && items[7] === 'X')
    ) {
      win = true;
      xScore += 1;

      let xName = document.getElementById('p1-name').value;
      winner = xName + ' Wins!';
      _toggleWinner();
      _toggleReset();
    }
  }

  function _winO() {
    if (
      (items[0] === 'O' && items[1] === 'O' && items[2] === 'O') ||
      (items[0] === 'O' && items[4] === 'O' && items[8] === 'O') ||
      (items[0] === 'O' && items[3] === 'O' && items[6] === 'O') ||
      (items[2] === 'O' && items[5] === 'O' && items[8] === 'O') ||
      (items[2] === 'O' && items[4] === 'O' && items[6] === 'O') ||
      (items[6] === 'O' && items[7] === 'O' && items[8] === 'O') ||
      (items[3] === 'O' && items[4] === 'O' && items[5] === 'O') ||
      (items[1] === 'O' && items[4] === 'O' && items[7] === 'O')
    ) {
      win = true;
      oScore += 1;
      let oName = document.getElementById('p2-name').value;

      winner = oName + ' Wins!';
      _toggleWinner();
      _toggleReset();
    }
  }

  // Create Game Board Section

  function createGameBoard() {
    const body = document.getElementById('body');

    for (let i = 0; i < 9; i++) {
      const number = i + 1;
      const className = `item-${number}`;

      const div = document.createElement('div');

      div.classList.add(className);
      div.classList.add('grid');
      div.setAttribute('data-index', i);
      div.textContent = '';
      div.addEventListener('click', () => {
        let roundRemainder = round % 2;
        let gameRemainder = game % 2;
        const turnDiv = document.getElementById('turn');
        let xName = document.getElementById('p1-name').value;
        let oName = document.getElementById('p2-name').value;

        if (gameRemainder === 1) {
          if (round < 10 && win === false) {
            if (roundRemainder === 1 && items[i] === '') {
              div.innerText = 'X';

              items[i] = 'X';
              console.log(items);

              turnDiv.innerHTML = `Turn: ${oName}`;
              _winX();
              _toggleDraw();
              toggleGame();
              addScore();

              round += 1;
            } else if (items[i] === '') {
              div.innerText = 'O';

              items[i] = 'O';
              console.log(items);

              turnDiv.innerHTML = `Turn: ${xName}`;
              _winO();
              _toggleDraw();
              toggleGame();
              addScore();

              round += 1;
            }
          }
        }
        if (gameRemainder === 0) {
          if (round < 10 && win === false) {
            if (roundRemainder === 1 && items[i] === '') {
              div.innerText = 'O';

              items[i] = 'O';
              console.log(items);

              turnDiv.innerHTML = `Turn: ${xName}`;
              _winO();
              _toggleDraw();
              toggleGame();
              addScore();

              round += 1;
            } else if (items[i] === '') {
              div.innerText = 'X';

              items[i] = 'X';
              console.log(items);

              turnDiv.innerHTML = `Turn: ${oName}`;
              _winX();
              _toggleDraw();
              toggleGame();
              addScore();

              round += 1;
            }
          }
        }
      });
      body.append(div);
    }
  }

  // Function to clear board

  function resetBoard() {
    const resetButton = document.getElementById('gridButton');
    resetButton.addEventListener('click', () => {
      if (win === true || draw === true) {
        round = 1;
        items = ['', '', '', '', '', '', '', '', ''];
        win = false;
        draw = false;
        const body = document.getElementById('body');
        while (body.firstChild) body.removeChild(body.firstChild);
        createGameBoard();
        game += 1;
        toggleGame();

        let gameRemainder = game % 2;
        const turnDiv = document.getElementById('turn');

        if (gameRemainder === 1) {
          let turnDiv = document.getElementById('turn');
          let xName = document.getElementById('p1-name').value;
          let variable = 'Turn: ' + xName;
          turnDiv.innerText = variable;
        } else {
          let turnDiv = document.getElementById('turn');
          let oName = document.getElementById('p2-name').value;
          let variable = 'Turn: ' + oName;
          turnDiv.innerText = variable;
        }
        resetButton.style.display = 'none';
      }
    });
  }

  // Return Section

  return {
    createGameBoard,
    resetBoard,
    toggleGame,
    addScore,
  };
})();

// Call Functions

let startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => {
  gameBoard.createGameBoard();
  gameBoard.resetBoard();
  gameBoard.toggleGame();
  gameBoard.addScore();
});
