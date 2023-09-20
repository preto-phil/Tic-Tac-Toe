////// CPU Version

function computerChoice() {
  let choicePage = document.getElementById('choice-page');
  let cpuPage = document.getElementById('cpu-page');
  choicePage.style.display = 'none';
  cpuPage.style.display = 'grid';
  CPUGameBoard.createCPUGameBoard();
  CPUGameBoard.resetBoard();
  CPUGameBoard.toggleGame();
  CPUGameBoard.addScore();
}

// Game board creation and game Module Pattern
const CPUGameBoard = (() => {
  let cells = ['', '', '', '', '', '', '', '', ''];

  // Block variable declarations
  let win = false;
  let draw = false;
  let winner;
  let round = 1;
  let game = 1;

  // Toggle reset button to appear
  function _toggleReset() {
    const targetDiv = document.getElementById('cpu-gridButton');
    if (win === true || draw === true) {
      targetDiv.style.display = 'block';
    } else {
      targetDiv.style.display = 'none';
    }
  }

  // Toggle and Display Winner function
  function _toggleWinner() {
    const turnDiv = document.getElementById('cpu-turn');

    if (win === true) {
      turnDiv.innerHTML = winner;
    }
  }

  // Display draw
  function _toggleDraw() {
    const turnDiv = document.getElementById('cpu-turn');

    if (round === 9 && win === false) {
      turnDiv.innerHTML = 'Draw!';
      draw = true;
      _toggleReset();
    }
  }

  // Change game number
  function toggleGame() {
    const gameDiv = document.getElementById('cpu-game');
    gameDiv.innerText = `Game ${game}`;
  }

  // Add Score
  const scoreDivX = document.getElementById('hs-score');
  const scoreDivCPU = document.getElementById('cpu-score');
  let oScore = 0;
  let xScore = 0;

  function addScore() {
    scoreDivX.innerText = xScore;
    scoreDivCPU.innerText = oScore;
  }

  // Winning Conditions
  function _winX() {
    if (
      (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
      (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
      (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
      (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X') ||
      (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
      (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
      (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X')
    ) {
      win = true;
      xScore += 1;

      winner = 'Homo Sapiens Wins!';
      _toggleWinner();
      _toggleReset();
    }
  }

  function _winO() {
    if (
      (cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
      (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
      (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
      (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
      (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O') ||
      (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
      (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
      (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O')
    ) {
      win = true;
      oScore += 1;

      winner = 'Computer Wins!';
      _toggleWinner();
      _toggleReset();
    }
  }

  // CPU Move Function
  function _cpuMoveFunction() {
    let cpuMove;
    // Create random cpuMove until an empty cell is found
    do {
      cpuMove = Math.floor(Math.random() * 9);
    } while (cells[cpuMove] !== '');
  
    const cell = document.getElementById(`${cpuMove}`);
    cell.innerText = 'O';
    cells[cpuMove] = 'O';
  }

  // Create Game Board Section which creates cells that call game loop when clicked
  function createCPUGameBoard() {
    const body = document.getElementById('cpu-body');
  
    for (let i = 0; i < 9; i++) {
      createGridCell(body, i);
    }
  }
  
  function createGridCell(container, index) {
    const number = index + 1;
    const className = `cell-${number}`;
  
    const div = document.createElement('div');
  
    div.classList.add(className);
    div.classList.add('grid');
    div.setAttribute('id', index);
    div.textContent = '';
    div.addEventListener('click', () => handleGridCellClick(div, index));
    container.append(div);
  }
  
  function handleGridCellClick(div, index) {
    if (round < 10 && win === false) {
      if (cells[index] === '') {
        div.innerText = 'X';
        cells[index] = 'X';
        _winX();
        _toggleDraw();
        round += 1;
  
        if (win === false && draw === false) {
          _cpuMoveFunction();
          _winO();
          _toggleDraw();
          round += 1;
        }
      }
    }
  }

  // Function to clear board
  function resetBoard() {
    const resetButton = document.getElementById('cpu-gridButton');
    resetButton.addEventListener('click', () => {
      if (win === true || draw === true) {
        round = 1;
        cells = ['', '', '', '', '', '', '', '', ''];
        win = false;
        draw = false;
        const body = document.getElementById('cpu-body');
        while (body.firstChild) body.removeChild(body.firstChild);
        createCPUGameBoard();
        game += 1;
        toggleGame();
        addScore();

        const turnDiv = document.getElementById('cpu-turn');
        turnDiv.innerText = '';

        resetButton.style.display = 'none';
      }
    });
  }

  return {
    createCPUGameBoard,
    resetBoard,
    toggleGame,
    addScore,
  };
})();

// Add a click event listener to the cpu home button
const cpuHomeBtn = document.getElementById("cpu-homeBtn");

cpuHomeBtn.addEventListener("click", () => {
  let choicePage = document.getElementById('choice-page');
  let cpuPage = document.getElementById('cpu-page');
  choicePage.style.display = 'grid';
  cpuPage.style.display = 'none';

  window.location.reload();
});

///////////////////////////////////////////////////////////











///////////////////////////////////////////////////////////

////// Two Player Version

// Function that follows two player path 
function twoPlayerChoice() {
  let choicePage = document.getElementById('choice-page');
  let startPage = document.getElementById('start-page');
  choicePage.style.display = 'none';
  startPage.style.display = 'grid';
}

// Toggle Page appear / disappear - assign values to name div's
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
      player1Name.innerText = xName || "Player X";
      player2Name.innerText = oName || "Player O";
    });
  }

  return {
    startGame,
  };
})();

start.startGame();

//  Display first turn information
const firstTurn = (() => {
  function firstXTurn() {
    let startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', () => {
      let turnDiv = document.getElementById('turn');
      let xName = document.getElementById('p1-name').value || 'Player X';
      let variable = 'Turn: ' + xName;
      turnDiv.innerText = variable;
    });
  }

  return {
    firstXTurn,
  };
})();

firstTurn.firstXTurn();

// Game board creation and game Module Pattern
const gameBoard = (() => {
  let cells = ['', '', '', '', '', '', '', '', ''];

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
      (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
      (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
      (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
      (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X') ||
      (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
      (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
      (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X')
    ) {
      win = true;
      xScore += 1;

      let xName = document.getElementById('p1-name').value || 'Player X';
      winner = xName + ' Wins!';
      _toggleWinner();
      _toggleReset();
    }
  }

  function _winO() {
    if (
      (cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
      (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
      (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
      (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
      (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O') ||
      (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
      (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
      (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O')
    ) {
      win = true;
      oScore += 1;
      let oName = document.getElementById('p2-name').value || 'Player O';

      winner = oName + ' Wins!';
      _toggleWinner();
      _toggleReset();
    }
  }

  // Create Game Board Section - contains game loop
  function createGameBoard() {
    const body = document.getElementById('body');

    for (let i = 0; i < 9; i++) {
      const number = i + 1;
      const className = `cell-${number}`;

      const div = document.createElement('div');

      div.classList.add(className);
      div.classList.add('grid');
      div.setAttribute('data-index', i);
      div.textContent = '';
      div.addEventListener('click', () => {
        let roundRemainder = round % 2;
        let gameRemainder = game % 2;
        const turnDiv = document.getElementById('turn');
        let xName = document.getElementById('p1-name').value || 'Player X';
        let oName = document.getElementById('p2-name').value || 'Player O';

        if (gameRemainder === 1) {
          if (round < 10 && win === false) {
            if (roundRemainder === 1 && cells[i] === '') {
              div.innerText = 'X';

              cells[i] = 'X';
              console.log(cells);

              turnDiv.innerHTML = `Turn: ${oName}`;
              _winX();
              _toggleDraw();

              round += 1;
            } else if (cells[i] === '') {
              div.innerText = 'O';

              cells[i] = 'O';
              console.log(cells);

              turnDiv.innerHTML = `Turn: ${xName}`;
              _winO();
              _toggleDraw();

              round += 1;
            }
          }
        }
        if (gameRemainder === 0) {
          if (round < 10 && win === false) {
            if (roundRemainder === 1 && cells[i] === '') {
              div.innerText = 'O';

              cells[i] = 'O';
              console.log(cells);

              turnDiv.innerHTML = `Turn: ${xName}`;
              _winO();
              _toggleDraw();

              round += 1;
            } else if (cells[i] === '') {
              div.innerText = 'X';

              cells[i] = 'X';
              console.log(cells);

              turnDiv.innerHTML = `Turn: ${oName}`;
              _winX();
              _toggleDraw();

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
        cells = ['', '', '', '', '', '', '', '', ''];
        win = false;
        draw = false;
        const body = document.getElementById('body');
        while (body.firstChild) body.removeChild(body.firstChild);
        createGameBoard();
        game += 1;
        toggleGame();
        addScore();

        let gameRemainder = game % 2;

        if (gameRemainder === 1) {
          let turnDiv = document.getElementById('turn');
          let xName = document.getElementById('p1-name').value  || 'Player X';
          let variable = 'Turn: ' + xName;
          turnDiv.innerText = variable;
        } else {
          let turnDiv = document.getElementById('turn');
          let oName = document.getElementById('p2-name').value  || 'Player O';
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

// Add a click event listener to the home button
const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", () => {
  let choicePage = document.getElementById('choice-page');
  let gamePage = document.getElementById('game-page');
  choicePage.style.display = 'grid';
  gamePage.style.display = 'none';

  window.location.reload();
});