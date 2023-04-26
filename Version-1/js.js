
//// Game board Object

const gameBoard = (() => {

  // Array Declaration

  const items = ['', '', '', '', '', '', '', '', ''];


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
  
        if (round < 10) {
          if (remainder === 1) {
            div.innerText = 'X';
    
            items[i] = 'X';
            console.log(items);
    
            round = round + 1;
            toggleTurn();
    
          } else {
            div.innerText = 'O';
    
            items[i] = 'O';
            console.log(items);
    
            round = round + 1;
            toggleTurn();
    
          }  
        }
      });
      console.log(div.dataset.index);
      body.append(div);
    };
  };


  // Experimentalism

    // What i want to do is assign X or O to specific array item using index value



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

  // Return Section

  return {
    createGameBoard: createGameBoard,
    gameBoardArray: items,
    /* getWinner: getWinner */
  };

})();

gameBoard.createGameBoard();
console.log(gameBoard.gameBoardArray);
/* gameBoard.getWinner() */




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

// game logic


/* let item1 = document.getElementsByClassName('item-1');
let item1Value = item1.innerText;
console.log(item1Value);
let item2 = document.getElementsByClassName('item-2');
let item3 = document.getElementsByClassName('item-3');

// Win 1
if (
  item1.innerText === "X" &&
  item2.innerText === "X" &&
  item3.innerText === "X" 
) {
  console.log("You Win!")
};
 */

