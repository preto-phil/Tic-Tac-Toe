const gameBoard = (() => {
  
  // Array Declaration

  let items = ['', '', '', '', '', '', '', '', ''];

  // Block variable declarations

  let win = false;
  let winner;
  let round = 1;
  let game = 1;

  // Toggle and Display Winner function

  function toggleWinner() {
    const turnDiv = document.getElementById('turn');

    if (win === true) {
      turnDiv.innerHTML = winner;
    }
  }

  // Display draw

  function toggleDraw() {
    const turnDiv = document.getElementById('turn');

    if (round === 9 && win === false) {
      turnDiv.innerHTML = 'Draw!';
    }
  }

  // Toggle and Display Turns btw players

  function toggleTurn() {
    const turnDiv = document.getElementById('turn');
    const turnText = turnDiv.innerHTML;

    if (turnText === 'Turn: Player O' && win === false) {
      turnDiv.innerHTML = 'Turn: Player X';
    }
    if (turnText === 'Turn: Player X' && win === false) {
      turnDiv.innerHTML = 'Turn: Player O';
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

  function winX() {
    if (
      items[0] === 'X' &&
      items[1] === 'X' &&
      items[2] === 'X' 
      ||
      items[0] === 'X' &&
      items[4] === 'X' &&
      items[8] === 'X' 
      ||
      items[0] === 'X' &&
      items[3] === 'X' &&
      items[6] === 'X' 
      ||
      items[2] === 'X' &&
      items[5] === 'X' &&
      items[8] === 'X' 
      ||
      items[2] === 'X' &&
      items[4] === 'X' &&
      items[6] === 'X' 
      ||
      items[6] === 'X' &&
      items[7] === 'X' &&
      items[8] === 'X' 
      ||
      items[3] === 'X' &&
      items[4] === 'X' &&
      items[5] === 'X' 
      ||
      items[1] === 'X' &&
      items[4] === 'X' &&
      items[7] === 'X'
    ) {
      win = true;
      xScore += 1;
      winner = 'Player X Wins!';
      toggleWinner();
    }
  }

  function winO() {
    if (
      items[0] === "O" &&
      items[1] === "O" &&
      items[2] === "O" 
      ||
      items[0] === "O" &&
      items[4] === "O" &&
      items[8] === "O" 
      ||
      items[0] === "O" &&
      items[3] === "O" &&
      items[6] === "O" 
      ||
      items[2] === "O" &&
      items[5] === "O" &&
      items[8] === "O" 
      ||
      items[2] === "O" &&
      items[4] === "O" &&
      items[6] === "O" 
      ||
      items[6] === "O" &&
      items[7] === "O" &&
      items[8] === "O" 
      ||
      items[3] === "O" &&
      items[4] === "O" &&
      items[5] === "O" 
      ||
      items[1] === "O" &&
      items[4] === "O" &&
      items[7] === "O"
    ) {
      win = true;
      oScore += 1;
      winner = 'Player O Wins!';
      toggleWinner();
    };
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
  
        if (gameRemainder === 1) {
          if (round < 10 && win === false) {
            if (roundRemainder === 1 && items[i] === '') {
              div.innerText = 'X';
              
              items[i] = 'X';
              console.log(items);
      
              toggleTurn();
              winX();
              toggleDraw();
              toggleGame();
              addScore();

  
              round += 1;
      
            } else if (items[i] === '') {
              div.innerText = 'O';
      
              items[i] = 'O';
              console.log(items);
      
              toggleTurn();
              winO();
              toggleDraw();
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
      
              toggleTurn();
              winO();
              toggleDraw();
              toggleGame();
              addScore();

  
              round += 1;

            } else if (items[i] === '') {

              div.innerText = 'X';
      
              items[i] = 'X';
              console.log(items);
      
              toggleTurn();
              winX();
              toggleDraw();
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
      round = 1;
      items = ['', '', '', '', '', '', '', '', ''];
      win = false;
      const body = document.getElementById('body');
      while (body.firstChild) body.removeChild(body.firstChild);
      createGameBoard();
      game += 1;
      toggleGame();
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

gameBoard.createGameBoard();
gameBoard.resetBoard();
gameBoard.toggleGame();
gameBoard.addScore();
