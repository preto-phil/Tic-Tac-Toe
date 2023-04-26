
//// Game board Object

const gameBoard = (() => {

  // Array Declaration

  const items = ['', '', '', '', '', '', '', '', ''];

  let win = false;
  let winner;
  let round = 1;

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
/*    div.addEventListener('click', toggleDisplay);*/      
      div.addEventListener('click', () => {
        
        let remainder = round % 2;;
  
        if (round < 10 && win === false) {
          if (remainder === 1) {
            div.innerText = 'X';
    
            items[i] = 'X';
            console.log(items);
    
            round = round + 1;
            toggleTurn();
            winX();

    
          } else {
            div.innerText = 'O';
    
            items[i] = 'O';
            console.log(items);
    
            round = round + 1;
            toggleTurn();
            winO();
    
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

  // Return Section

  return {
    createGameBoard: createGameBoard,
    gameBoardArray: items,
  };

})();

gameBoard.createGameBoard();
console.log(gameBoard.gameBoardArray);







// Factory Function to create player info
const player = (name, sign) => {
  
  const getName = () => name;
  const getSign = () => sign;

  return {
    getName,
    getSign
  };

};

const player1 = player('P1', 'X'); // change that player inputs it in Phase 1
const player2 = player('P2', 'O'); // change that player inputs it in Phase 1

//// Experimental Area

  // Toggle Display Section

/*   let round = 1; */

  /* function toggleDisplay() {
    
    let remainder = round % 2;;
  
    if (round < 10) {
      if (remainder === 1) {
        this.innerText = 'X';

        items[] = 'X';
        console.log(items);

        round = round + 1;
        toggleTurn();

      } else {
        this.innerText = 'O';

        items[i] = 'X';
        console.log(items);

        round = round + 1;
        toggleTurn();

      }  
    }
  }; */