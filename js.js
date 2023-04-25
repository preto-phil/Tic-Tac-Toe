
//// Gameboard Object

const gameBoard = (() => {

  const items = [];

  function createGameBoard() {
    
    const body = document.getElementById('body');

    for (let i = 0; i < 9; i++) {
      let number = i + 1;
      let className = 'item-' + number;

      items[i] = document.createElement('div');

      items[i].classList.add(className);
      items[i].textContent = number;
      items[i].addEventListener('click', toggleDisplay);
      body.append(items[i]);
    };
  };

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

function toggleDisplay() {
/*   if (player.getSign === 'X') { */
    this.innerText = 'X';
/*   } */
}


(onclick) => {
  this.innerText = 'X';
}