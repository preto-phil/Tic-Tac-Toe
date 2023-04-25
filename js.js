
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
      items[i].addEventListener('click', toggleDisplay );
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


// Toggle display for the moment
/* function toggleDisplay() {
  if (player.getSign === 'X') {
    this.innerText = 'X';
  } else {
    this.innerText = 'O';
  }
}; */

let round = 1;

function toggleDisplay() {
  
  let remainder = round % 2;;

  if (round < 10) {
    if (remainder === 1) {
      // display = player 1 turn
      this.innerText = 'X';
      round = round + 1;
    } else {
      // display player 2 turn
      this.innerText = 'O';
      round = round + 1;
    }  
  }
};


// Factory Function to create player info
const player = (name, sign) => {
  
  const getName = () => name;
  const getSign = () => sign;

  function toggleDisplay() {
  
    let round = 1;
    let remainder;
  
    for (let i = 1; i < 10; i++) {
      
      remainder = round % 2;
      if (remainder === 1 ) {
        // display = player 1 turn
        this.innerText = 'X';
        console.log('X');
      } else {
        // display player 2 turn
        this.innerText = 'X';
        console.log('O');
      }
      round = round + 1;
    }
    
/*     if (player.getSign === 'X') {
      this.innerText = 'X';
    } else {
      this.innerText = 'O';
    } */
  };

  return {
    getName,
    getSign,
    toggleDisplay 
  };

};

const player1 = player('P1', 'X'); // change that player inputs it in Phase 1
const player2 = player('P2', 'O'); // change that player inputs it in Phase 1

//// Experimental Area

/* function displayController() {
  let round = 1;
  let remainder;

  for (let i = 1; i < 10; i++) {
    
    remainder = round % 2;
    if (remainder === 1 ) {
      // display = player 1 turn
      console.log('X');
    } else {
      // display player 2 turn
      console.log('O');
    }
    round = round + 1;
  }

}

displayController(); */