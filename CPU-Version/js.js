
// Toggle Page appear / disappear

const start = (() => {
  function startGame() {
    let startBtn = document.getElementById('start-btn');
    let startPage = document.getElementById('start-page');
    let cpuPage = document.getElementById('cpu-page');
    _toggleNames();
    startBtn.addEventListener('click', () => {
      startPage.style.display = 'none';
      cpuPage.style.display = 'grid';
    });
  }

  function _toggleNames() {
    let startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', () => {
      let xName = document.getElementById('p1-name').value;
      let player1Name = document.getElementById('p1');
      player1Name.innerText = xName;
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

      winner = 'Computer' + ' Wins!';
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


  // Create Game Board Section

  function createGameBoard() {
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
          
        }
        if (round < 10 && win === false) {
          if (items[i] === '') {
            div.innerText = 'X';

            items[i] = 'X';
            console.log(items);

            _winX();
            _toggleDraw();
            toggleGame();
            addScore();

            round += 1;

            if (win === false) {
              _cpuMoveFunction();

              _winO();
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
        const body = document.getElementById('cpu-body');
        while (body.firstChild) body.removeChild(body.firstChild);
        createGameBoard();
        game += 1;
        toggleGame();

        const turnDiv = document.getElementById('turn');
        turnDiv.innerText = '';

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
