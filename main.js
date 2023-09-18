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
  let items = ['', '', '', '', '', '', '', '', ''];

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

      winner = 'Homo Sapiens Wins!';
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

      winner = 'Computer Wins!';
      _toggleWinner();
      _toggleReset();
    }
  }

  // CPU Move Function
  function _cpuMoveFunction() {

    let cpuMove = Math.floor(Math.random() * 9) + 1;
    console.log(cpuMove);
  
    let div1 = document.getElementById('0');
    let div2 = document.getElementById('1');
    let div3 = document.getElementById('2');
    let div4 = document.getElementById('3');
    let div5 = document.getElementById('4');
    let div6 = document.getElementById('5');
    let div7 = document.getElementById('6');
    let div8 = document.getElementById('7');
    let div9 = document.getElementById('8');
    
    if (cpuMove === 1 && items[0] === '') {
      div1.innerText = 'O';
      items[0] = 'O';
      return;
    }
    if (cpuMove === 1 && items[0] !== '') {
      _cpuMoveFunction();
    }
  
    if (cpuMove === 2 && items[1] === '') {
      div2.innerText = 'O';
      items[1] = 'O';
      return;
    }
    if (cpuMove === 2 && items[1] !== ''){
      _cpuMoveFunction();
    }
  
    if (cpuMove === 3 && items[2] === '') {
      div3.innerText = 'O';
      items[2] = 'O';
      return;
    }
    if (cpuMove === 3 && items[2] !== '') {
      _cpuMoveFunction();
    }
  
    if (cpuMove === 4 && items[3] === '') {
      div4.innerText = 'O';
      items[3] = 'O';
      return;
    }
    if (cpuMove === 4 && items[3] !== '') {
      _cpuMoveFunction();
    }
  
    if (cpuMove === 5 && items[4] === '') {
      div5.innerText = 'O';
      items[4] = 'O';
      return;
    }
    if (cpuMove === 5 && items[4] !== '') {
      _cpuMoveFunction();
    }
  
    if (cpuMove === 6 && items[5] === '') {
      div6.innerText = 'O';
      items[5] = 'O';
      return;
    }
    if (cpuMove === 6 && items[5] !== '') {
      _cpuMoveFunction();
    }
  
    if (cpuMove === 7 && items[6] === '') {
      div7.innerText = 'O';
      items[6] = 'O';
      return;
    }
    if (cpuMove === 7 && items[6] !== '') {
      _cpuMoveFunction();
    }
  
    if (cpuMove === 8 && items[7] === '') {
      div8.innerText = 'O';
      items[7] = 'O';
      return;
    } 
    if (cpuMove === 8 && items[7] !== '') {
      _cpuMoveFunction();
    }
  
    if (cpuMove === 9 && items[8] === '') {
      div9.innerText = 'O';
      items[8] = 'O';
      return;
    }
    if (cpuMove === 9 && items[8] !== '') {
      _cpuMoveFunction();
    }
  }

  // Create Game Board Section - contains game loop
  function createCPUGameBoard() {
    const body = document.getElementById('cpu-body');

    for (let i = 0; i < 9; i++) {
      const number = i + 1;
      const className = `item-${number}`;

      const div = document.createElement('div');

      div.classList.add(className);
      div.classList.add('grid');
      div.setAttribute('id', i);
      div.textContent = '';
      div.addEventListener('click', () => {
        let gameRemainder = game % 2;
        if (gameRemainder === 1) {
          // Can make it so that cpu moves first every second round
          // cpu move needs to be triggered by clicking reset button
        }
        if (round < 10 && win === false) {
          if (items[i] === '') {
            div.innerText = 'X';

            items[i] = 'X';
            console.log(items);

            _winX();
            _toggleDraw();

            round += 1;

            if (win === false || draw === false) {
              _winO();
              _toggleDraw();
              if (win === false) {
                _cpuMoveFunction();
              }
 
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
    const resetButton = document.getElementById('cpu-gridButton');
    resetButton.addEventListener('click', () => {
      if (win === true || draw === true) {
        round = 1;
        items = ['', '', '', '', '', '', '', '', ''];
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

  // Return Section

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
      player1Name.innerText = xName;
      player2Name.innerText = oName;
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

// Game board creation and game Module Pattern
const gameBoard = (() => {
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

  // Create Game Board Section - contains game loop
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

              round += 1;
            } else if (items[i] === '') {
              div.innerText = 'O';

              items[i] = 'O';
              console.log(items);

              turnDiv.innerHTML = `Turn: ${xName}`;
              _winO();
              _toggleDraw();

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

              round += 1;
            } else if (items[i] === '') {
              div.innerText = 'X';

              items[i] = 'X';
              console.log(items);

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
        items = ['', '', '', '', '', '', '', '', ''];
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

// Add a click event listener to the home button
const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", () => {
  let choicePage = document.getElementById('choice-page');
  let gamePage = document.getElementById('game-page');
  choicePage.style.display = 'grid';
  gamePage.style.display = 'none';

  window.location.reload();
});