
//// Gameboard Object

const gameBoard = (() => {

  // Array Declaration

  const items = [];


  // Toggle Display Section

  let round = 1;

  function toggleDisplay() {
    
    let remainder = round % 2;;
  
    if (round < 10) {
      if (remainder === 1) {
        this.innerText = 'X';
        round = round + 1;
      } else {
        this.innerText = 'O';
        round = round + 1;
      }  
    }
  };
  



  // Display Turn Section





  // Toggle Turn Section


  function toggleTurn() {
    const turnDiv = document.getElementById('turn');
    let turnText = turnDiv.innerHTML;
    
    if (turnText === 'Turn: Player O') {
      turnDiv.innerHTML = 'Turn: Player X';
    }
    if (turnText === 'Turn: Player X') {
      turnDiv.innerHTML = 'Turn: Player O';
    }
  }



  // Create Game Board Section

  function createGameBoard() {
    
    const body = document.getElementById('body');

    for (let i = 0; i < 9; i++) {
      let number = i + 1;
      let className = 'item-' + number;

      items[i] = document.createElement('div');

      items[i].classList.add(className);
      items[i].textContent = '';
      items[i].addEventListener('click', toggleDisplay);
      items[i].addEventListener('click', toggleTurn);
      body.append(items[i]);
    };
  };



  // Return Section

  return {
    createGameBoard: createGameBoard,
    gameBoardArray: items
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

