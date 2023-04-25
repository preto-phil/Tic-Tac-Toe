
//// Gameboard Object

const gameBoard = (() => {

  const items = [];

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
  
  function createGameBoard() {
    
    const body = document.getElementById('body');

    for (let i = 0; i < 9; i++) {
      let number = i + 1;
      let className = 'item-' + number;

      items[i] = document.createElement('div');

      items[i].classList.add(className);
      items[i].textContent = number;
      items[i].addEventListener('click', toggleDisplay);
      /* items[i].addEventListener('click', turnPlayers); */
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

const turnDiv = document.getElementById('turn');
const turnText = turnDiv.innerHTML;

if (turnText === '') {
  turnDiv.innerHTML = 'Turn: Player X';
}

