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

  function toggleFunction() {
    const targetDiv = document.getElementById('gridButton');
    if (win === true || draw === true) {
      targetDiv.style.display = 'block';
    } else {
      targetDiv.style.display = 'none';
    }
  }

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
      draw = true;
      toggleFunction();
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
      winner = 'Player X Wins!';
      toggleWinner();
      toggleFunction();
    }
  }

  function winO() {
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
      winner = 'Player O Wins!';
      toggleWinner();
      toggleFunction();
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


        if (gameRemainder === 1) {
          if (round < 10 && win === false) {
            if (roundRemainder === 1 && items[i] === '') {
              div.innerText = 'X';

              items[i] = 'X';
              console.log(items);

              turnDiv.innerHTML = 'Turn: Player O';
              winX();
              toggleDraw();
              toggleGame();
              addScore();

              round += 1;
            } else if (items[i] === '') {
              div.innerText = 'O';

              items[i] = 'O';
              console.log(items);

              turnDiv.innerHTML = 'Turn: Player X';
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

              turnDiv.innerHTML = 'Turn: Player X';
              winO();
              toggleDraw();
              toggleGame();
              addScore();

              round += 1;
            } else if (items[i] === '') {
              div.innerText = 'X';

              items[i] = 'X';
              console.log(items);

              turnDiv.innerHTML = 'Turn: Player O';
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
          turnDiv.innerHTML = 'Turn: Player X';
        } else {
          turnDiv.innerHTML = 'Turn: Player O';
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

gameBoard.createGameBoard();
gameBoard.resetBoard();
gameBoard.toggleGame();
gameBoard.addScore();


// Toggle Reset