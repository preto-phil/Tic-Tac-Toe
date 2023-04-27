
//// Game board Object

const gameBoard = (() => {

  // Array Declaration

  let items = ['', '', '', '', '', '', '', '', ''];

  let win = false;
  let winner;
  let round = 1;
  let game = 1;

  // Create Game Board Section

  function createGameBoard() {
    
    const body = document.getElementById('body');

    for (let i = 0; i < 9; i++) {
      let number = i + 1;
      let className = 'item-' + number;

      let div = document.createElement('div');

      div.classList.add(className);
      div.classList.add('grid')
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
              toggleGame()
  
              round = round + 1;
      
            } else if (items[i] === '') {
              div.innerText = 'O';
      
              items[i] = 'O';
              console.log(items);
      
              toggleTurn();
              winO();
              toggleDraw();
              toggleGame()
  
              round = round + 1;
      
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
              toggleGame()
  
              round = round + 1;

            } else if (items[i] === '') {

              div.innerText = 'X';
      
              items[i] = 'X';
              console.log(items);
      
              toggleTurn();
              winX();
              toggleDraw();
              toggleGame()
  
              round = round + 1;
      
            }  
          }
        }

      });
      body.append(div);
    };
  };



  // Winning Conditions

  function winX() {
    if (
      items[0] === "X" &&
      items[1] === "X" &&
      items[2] === "X" 
      ||
      items[0] === "X" &&
      items[4] === "X" &&
      items[8] === "X" 
      ||
      items[0] === "X" &&
      items[3] === "X" &&
      items[6] === "X" 
      ||
      items[2] === "X" &&
      items[5] === "X" &&
      items[8] === "X" 
      ||
      items[2] === "X" &&
      items[4] === "X" &&
      items[6] === "X" 
      ||
      items[6] === "X" &&
      items[7] === "X" &&
      items[8] === "X" 
      ||
      items[3] === "X" &&
      items[4] === "X" &&
      items[5] === "X" 
      ||
      items[1] === "X" &&
      items[4] === "X" &&
      items[7] === "X"
    ) {
      console.log("Player X Wins!")
      win = true;
      winner = 'Player X Wins!';
      toggleWinner();
    };
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
      console.log("Player O Wins!");
      win = true;
      winner = 'Player O Wins!';
      toggleWinner();
    };
  }

  function toggleWinner() {
    const turnDiv = document.getElementById('turn');
    
    if (win === true) {
      turnDiv.innerHTML = winner;
    }
  }

  function toggleDraw() {
    const turnDiv = document.getElementById('turn');

    if (round === 9 && win === false) {
      turnDiv.innerHTML = "Draw!";
    }
  }


  // Toggle Turn Section

  function toggleTurn() {
    const turnDiv = document.getElementById('turn');
    let turnText = turnDiv.innerHTML;

    if ( turnText === 'Turn: Player O' && win === false ) {
      turnDiv.innerHTML = 'Turn: Player X';
    }
    if (turnText === 'Turn: Player X' & win === false ) {
      turnDiv.innerHTML = 'Turn: Player O';
    }
  };


  function resetBoard() {
    const resetButton = document.getElementById('gridButton');
    resetButton.addEventListener('click', () => {
      round = 1;
      items = ['', '', '', '', '', '', '', '', ''];
      win = false;
      const body = document.getElementById('body');
      while (body.firstChild) body.removeChild(body.firstChild);
      createGameBoard();
      game = game + 1;
      toggleGame();
    })
  };
  
  function toggleGame() {
    let gameDiv = document.getElementById('game');
    gameDiv.innerText = `Game ${game}`;
  };

  // Return Section

  return {
    createGameBoard: createGameBoard,
    resetBoard: resetBoard,
    toggleGame: toggleGame,
    gameBoardArray: items,
  };

})();

gameBoard.createGameBoard();
gameBoard.resetBoard();
gameBoard.toggleGame();
console.log(gameBoard.gameBoardArray);


